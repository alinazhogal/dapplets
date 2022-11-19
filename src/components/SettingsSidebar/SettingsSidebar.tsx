import { ReactComponent as Arrow } from '../../assets/arrow-right.svg'
import { Text } from '../../elements/Text/Text'
import { Input } from '../../elements/Input/Input'
import styles from './SettingsSidebar.module.css'

export const SettingsSidebar = () => {
  return (
    <aside className={styles.root}>
      <Arrow />
      <Text>Dapplet Settings</Text>
      <div className={styles.inputs}>
        <Input name='List' label='Create new list' placeholder='List name' />
        <Input name='Tag' label='Create new tag' placeholder='Tag name' />
      </div>
    </aside>
  )
}
