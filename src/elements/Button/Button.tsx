import cn from 'clsx'
import styles from './Button.module.css'

type Props = {
  children: string
  variant?: 'install' | 'create'
  className?: string
}

export const Button = ({ children, variant = 'install', className }: Props) => {
  const rootClassName = cn(
    styles.root,
    {
      [styles.create]: variant === 'create',
    },
    className,
  )
  return <button className={rootClassName}>{children}</button>
}
