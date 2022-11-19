import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import styles from './Search.module.css'

export const Search = () => {
  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <input className={styles.input} placeholder='Search' />
    </div>
  )
}
