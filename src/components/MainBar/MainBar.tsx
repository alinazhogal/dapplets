import React from 'react'
import { AppItem } from '../AppItem/AppItem'
import { Search } from '../Search/Search'
import styles from './MainBar.module.css'

export const MainBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.bg} />
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.content}>
        <AppItem />
        <AppItem />
        <AppItem />
      </div>
    </div>
  )
}
