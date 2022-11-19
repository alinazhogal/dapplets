import { ReactComponent as Users } from '../../assets/users.svg'
import styles from './MenuItem.module.css'

export const MenuItem = () => {
  return (
    <li className={styles.root}>
      <Users />
      <span>All Dapplets</span>
    </li>
  )
}
