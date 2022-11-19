import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Arrow } from '../../assets/arrow-right.svg'
import styles from './MenuSidebar.module.css'

export const MenuSidebar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.logo}>
        <Logo />
        <div className={styles.logoToHide}>
          <span className={styles.logoText}>Dapplets Project</span>
          <Arrow className='rotate-180' />
        </div>
      </div>
    </nav>
  )
}
