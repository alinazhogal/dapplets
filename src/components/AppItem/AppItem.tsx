import { useState } from 'react'
import cn from 'clsx'
import example from '../../assets/app-example.png'
import { ReactComponent as Drag } from '../../assets/drag.svg'
import { Button } from '../../elements/Button/Button'
import { Dapplet } from '../types/dapplet'
import { Tag } from '../Tag/Tag'
import styles from './AppItem.module.css'
import { useAppSelector } from '../../redux/hooks'

export const AppItem = (dapplet: Dapplet) => {
  const [isOpen, setIsOpen] = useState(false)
  const { allTags } = useAppSelector((state) => state.dapplets)

  const {
    title,
    author,
    address,
    description,
    text_1,
    text_2,
    text_3,
    text_4,
    text_5,
    text_6,
    text_7,
    text_8,
    text_9,
    tags,
  } = dapplet
  const additionalInfo = [text_1, text_2, text_3, text_4, text_5, text_6, text_7, text_8, text_9]
  const dappletTags = []
  for (const tag of tags) {
    if (allTags[Number(tag)]) dappletTags.push(allTags[Number(tag)])
  }

  return (
    <div className={styles.root} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.main}>
        <Drag className={styles.drag} />
        <img className={styles.img} src={example} alt='app' width={50} height={50} />
        <div className={styles.titleInfo}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.numbers}>{address}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <span className={styles.author}>{author}</span>
        <div className={styles.tags}>
          {dappletTags.map(({ name, id }) => (
            <Tag title={name} key={id} />
          ))}
        </div>
        <Button>Install</Button>
      </div>
      {isOpen && (
        <div className={cn(styles.accordeon, isOpen && styles.accordeonOpen)}>
          <div className={styles.texts}>
            {additionalInfo.map((text, i) => (
              <p key={i} className={styles.p}>
                {text}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
