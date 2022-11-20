import cn from 'clsx'
import styles from './MenuItem.module.css'

type Props = {
  title: string
  icon: JSX.Element
  open: boolean
}

export const MenuItem = ({ title, icon, open }: Props) => {
  return (
    <li className={styles.root}>
      {icon}
      <span className={cn(styles.span, open && styles.open)}>{title}</span>
    </li>
  )
}
