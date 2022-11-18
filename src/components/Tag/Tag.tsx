import React from 'react'
import { ReactComponent as Close } from '../../assets/cross.svg'
import styles from './Tag.module.css'

export const Tag = ({ title }: { title: string }) => {
  return (
    <div className={styles.root}>
      <span>{title}</span>
      <Close />
    </div>
  )
}
