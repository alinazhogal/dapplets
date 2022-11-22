import styles from './LoadingDots.module.css'

export const LoadingDots = () => {
  return (
    <div className={styles.col3}>
      <div className={styles.snippet} data-title='dot-flashing'>
        <div className={styles.stage}>
          <div className={styles.dotFlashing}></div>
        </div>
      </div>
    </div>
  )
}
