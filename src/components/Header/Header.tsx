import { ReactComponent as Cloud } from '../../assets/cloud.svg'
import { ReactComponent as Settings } from '../../assets/settings.svg'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <div className={styles.cloud}>
          <Cloud />
          <span className={styles.span}>Extension state: </span>
          <span className='text-green font-medium'>Active</span>
        </div>
        <div>
          <button className={styles.settings}>
            <Settings className='mr-2.5' />
            Settings
          </button>
        </div>
      </div>
    </header>
  )
}
