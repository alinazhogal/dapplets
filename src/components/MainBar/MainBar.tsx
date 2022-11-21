import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Loader } from '../../elements/Loader/Loader'
import { SortButton } from '../../elements/SortButton/SortButton'
import { getDapplets } from '../../redux/actionCreator'
import { setDapplets } from '../../redux/dappletsSlice'
import { AppItem } from '../AppItem/AppItem'
import { Search } from '../Search/Search'
import styles from './MainBar.module.css'

export const MainBar = () => {
  const [sort, setSort] = useState<'DESC' | 'ASC'>('DESC')
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()
  const { dapplets, isLoading, error } = useAppSelector((state) => state.dapplets)

  const handleSortClick = () => {
    if (sort === 'DESC') {
      setSort('ASC')
    } else setSort('DESC')
  }
  console.log(error)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(getDapplets({ sort }))
  }, [])

  useEffect(() => {
    dispatch(getDapplets({ sort, search }))
  }, [sort, search])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const items = Array.from(dapplets)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    dispatch(setDapplets(items))
  }

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <Search value={search} onChange={handleInputChange} />
        <SortButton direction={sort} onClick={handleSortClick}>
          {sort === 'DESC' ? 'Descending' : 'Ascending'}
        </SortButton>
      </div>
      {error && <div>ERROR</div>}
      {isLoading && <Loader />}
      {dapplets.length !== 0 && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div className={styles.content} {...provided.droppableProps} ref={provided.innerRef}>
                {dapplets.map((dap, index) => (
                  <AppItem dapplet={dap} index={index} key={dap.id} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  )
}
