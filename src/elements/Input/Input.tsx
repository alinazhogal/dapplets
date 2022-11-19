import React from 'react'
import { Button } from '../Button/Button'
import styles from './Input.module.css'

type Props = {
  name: string
  label: string
  placeholder: string
}

export const Input = ({ name, label, placeholder }: Props) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name} className={styles.label}>
        {label}
        <input name={name} id={name} className={styles.input} placeholder={placeholder} />
      </label>
      <Button variant='create'>Create</Button>
    </div>
  )
}
