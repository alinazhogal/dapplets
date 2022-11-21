import React, { useEffect, useState } from 'react'
import { SortButton } from '../../elements/SortButton/SortButton'
import { getDapplets } from '../../redux/actionCreator'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { AppItem } from '../AppItem/AppItem'
import { Search } from '../Search/Search'
import styles from './MainBar.module.css'

export const MainBar = () => {
  const [sort, setSort] = useState<'DESC' | 'ASC'>('DESC')
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()
  const { dapplets } = useAppSelector((state) => state.dapplets)

  const handleSortClick = () => {
    if (sort === 'DESC') {
      setSort('ASC')
    } else setSort('DESC')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(getDapplets({ sort }))
  }, [])

  useEffect(() => {
    dispatch(getDapplets({ sort, search }))
  }, [sort, search])

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <Search value={search} onChange={handleInputChange} />
        <SortButton direction={sort} onClick={handleSortClick}>
          {sort === 'DESC' ? 'Descending' : 'Ascending'}
        </SortButton>
      </div>
      <div className={styles.content}>
        {dapplets.map((dap) => (
          <AppItem {...dap} key={dap.id} />
        ))}
      </div>
    </div>
  )
}
