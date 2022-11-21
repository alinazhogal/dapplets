import { ReactComponent as Sort } from '../../assets/sort.svg'
import styles from './SortButton.module.css'

type Props = {
  children: string
  direction: 'ASC' | 'DESC'
  onClick: () => void
}

export const SortButton = ({ children, direction, onClick }: Props) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {children}
      <Sort className={direction === 'ASC' ? 'rotate-180' : ''} />
    </button>
  )
}
