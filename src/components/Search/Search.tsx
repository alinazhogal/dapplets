import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import styles from './Search.module.css'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({ value, onChange }: Props) => {
  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <input value={value} onChange={onChange} className={styles.input} placeholder='Search' />
    </div>
  )
}
