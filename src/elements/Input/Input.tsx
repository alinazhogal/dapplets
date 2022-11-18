import React from 'react'
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
      </label>
      <input name={name} id={name} className={styles.input} placeholder={placeholder} />
    </div>
  )
}
