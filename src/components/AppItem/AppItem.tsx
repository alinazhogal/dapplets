import React from 'react'
import example from '../../assets/app-example.png'
import { ReactComponent as Drag } from '../../assets/drag.svg'
import { Button } from '../../elements/Button/Button'
import { Tag } from '../Tag/Tag'
import styles from './AppItem.module.css'

const ex = ['Social Media', 'Finances', 'Twitter', 'Top 100']

export const AppItem = () => {
  return (
    <div className={styles.root}>
      <Drag className={styles.drag} />
      <img className={styles.img} src={example} alt='app' width={50} height={50} />
      <div className={styles.titleInfo}>
        <h4 className={styles.title}>Ethereum Contracts Example</h4>
        <p className={styles.numbers}>0xC12......E3836</p>
      </div>
      <p className={styles.description}>Feature adds tweets to Ethereum contract </p>
      <span className={styles.author}>debra.holt</span>
      <div className={styles.tags}>
        {ex.map((title, i) => (
          <Tag title={title} key={i} />
        ))}
      </div>
      <Button title='install' />
    </div>
  )
}
