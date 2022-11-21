import { useState } from 'react'
import cn from 'clsx'
import example from '../../assets/app-example.png'
import { ReactComponent as Drag } from '../../assets/drag.svg'
import { Button } from '../../elements/Button/Button'
import { Dapplet } from '../../types/dapplet'
import { Tag } from '../Tag/Tag'
import styles from './AppItem.module.css'
import { useAppSelector } from '../../redux/hooks'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
  dapplet: Dapplet
  index: number
}

export const AppItem = ({ dapplet, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { allTags } = useAppSelector((state) => state.dapplets)

  const {
    id,
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
  const dappletTags: typeof allTags = []
  for (const tag of tags) {
    if (allTags[Number(tag)]) dappletTags.push(allTags[Number(tag)])
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={styles.root}
          onClick={() => setIsOpen(!isOpen)}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className={styles.main}>
            <div className={styles.drag} {...provided.dragHandleProps}>
              <Drag />
            </div>
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
      )}
    </Draggable>
  )
}
