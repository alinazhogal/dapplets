import React, { useEffect, useRef, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Loader } from '../../elements/Loader/Loader'
import { SortButton } from '../../elements/SortButton/SortButton'
import { getDapplets } from '../../redux/actionCreator'
import { setDapplets } from '../../redux/dappletsSlice'
import { AppItem } from '../AppItem/AppItem'
import { Search } from '../Search/Search'
import styles from './MainBar.module.css'
import debounce from '../../helpers/debounce'
import useInfiniteScroll from '../../helpers/useInfiniteScroll'

export const MainBar = () => {
  const [sort, setSort] = useState<'DESC' | 'ASC'>('DESC')
  const [search, setSearch] = useState('')
  const isMounted = useRef(false)
  const { setLastElement, start, setStart } = useInfiniteScroll()

  const dispatch = useAppDispatch()
  const { dapplets, isLoading, error, total } = useAppSelector((state) => state.dapplets)

  useEffect(() => {
    if (!window.localStorage.getItem('installed')) {
      window.localStorage.setItem('installed', JSON.stringify({}))
    }
    dispatch(getDapplets({ sort }))
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      dispatch(setDapplets([]))
      debounce(() => dispatch(getDapplets({ sort, search })))
      setStart(0)
    } else {
      isMounted.current = true
    }
  }, [search, sort])

  useEffect(() => {
    if (dapplets.length && start + 20 <= total) {
      dispatch(getDapplets({ sort, search, start }))
    }
  }, [start])

  const handleSortClick = () => {
    if (sort === 'DESC') {
      setSort('ASC')
    } else setSort('DESC')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  console.log(total)
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
      {dapplets.length !== 0 && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div className={styles.content} {...provided.droppableProps} ref={provided.innerRef}>
                {dapplets.map((dap, index) => (
                  <AppItem dapplet={dap} index={index} key={dap.id} />
                ))}
                <div ref={setLastElement} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      {error && <div className={styles.error}>Error occured. Try again</div>}
      {isLoading && <Loader />}
    </div>
  )
}
