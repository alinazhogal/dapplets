import { useState } from 'react'
import cn from 'clsx'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Arrow } from '../../assets/arrow-right.svg'
import { ReactComponent as Users } from '../../assets/users.svg'
import { ReactComponent as Sandbox } from '../../assets/codesandbox.svg'
import { ReactComponent as Trend } from '../../assets/trending-up.svg'
import { ReactComponent as Heart } from '../../assets/heart.svg'
import { ReactComponent as Grid } from '../../assets/grid.svg'
import { Text } from '../../elements/Text/Text'
import styles from './MenuSidebar.module.css'
import { MenuItem } from '../MenuItem/MenuItem'

const menu = [
  { title: 'All Dapplets', icon: <Sandbox /> },
  { title: 'Editor’s Choice', icon: <Heart /> },
  { title: 'Essential Dapplets', icon: <Grid /> },
  { title: 'Social Networks', icon: <Users /> },
  { title: 'Financial Dapplets', icon: <Trend /> },
]

const lists = [
  { list: 'TOP-10 Twitter Dapplets', author: 'Me' },
  { list: 'Best Financial dapplets by Jack', author: 'Jack' },
]

export const MenuSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={cn(styles.root, isOpen && styles.open)}>
      <div className={cn(styles.logo, isOpen && styles.logoOpen)}>
        <Logo className={styles.icon} />
        <div className={cn(styles.logoToHide, isOpen && styles.opened)}>
          <span className={styles.logoText}>Dapplets Project</span>
          <button className={styles.button} onClick={() => setIsOpen(false)}>
            <Arrow className='rotate-180' />
          </button>
        </div>
      </div>
      <ul className={styles.menu} onClick={() => setIsOpen(true)}>
        {menu.map((item) => (
          <MenuItem key={item.title} {...item} open={isOpen} />
        ))}
      </ul>
      <div className={cn(styles.list, isOpen && styles.listOpened)}>
        <Text variant='subHeading'>My lists</Text>
        {lists.map((li, i) => (
          <div key={i} className='text-gray-56 max-h-6 overflow-hidden'>
            <p>
              {li.list} (<span className='text-blue underline cursor-pointer'>{li.author}</span>)
            </p>
          </div>
        ))}
      </div>
    </nav>
  )
}
