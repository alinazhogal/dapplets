import cn from 'clsx'
import React from 'react'
import styles from './Button.module.css'

type Props = {
  children: string
  variant?: 'install' | 'create'
  className?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  variant = 'install',
  className,
  disabled = false,
  onClick,
}: Props) => {
  const rootClassName = cn(
    styles.root,
    {
      [styles.create]: variant === 'create',
    },
    className,
  )
  return (
    <button disabled={disabled} className={rootClassName} onClick={onClick}>
      {children}
    </button>
  )
}
