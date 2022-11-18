import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <div>
          <span>Extension state</span>
          <span>Active</span>
        </div>
        <div>
          <button>Settings</button>
        </div>
      </div>
    </header>
  )
}
