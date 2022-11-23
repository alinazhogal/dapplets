import { useEffect, useState } from 'react'
import cn from 'clsx'
import { ReactComponent as Drag } from '../../assets/drag.svg'
import { Button } from '../../elements/Button/Button'
import { Dapplet } from '../../types/dapplet'
import { Tag } from '../Tag/Tag'
import styles from './AppItem.module.css'
import { useAppSelector } from '../../redux/hooks'
import { Draggable } from 'react-beautiful-dnd'
import useWindowDimensions from '../../helpers/useWindowDimension'
import { workWithStorage } from '../../helpers/storage'
import { api } from '../../api'
import { LoadingDots } from '../LoadingDots/LoadingDots'

type Props = {
  dapplet: Dapplet
  index: number
}

export const AppItem = ({ dapplet, index }: Props) => {
  const {
    id,
    title,
    author,
    icon,
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
    tags: tagsIndexesArr,
  } = dapplet

  const [isOpen, setIsOpen] = useState(false)
  const [img, setImg] = useState('https://gildasclubgr.org/wp-content/uploads/2019/02/no-image.jpg')
  const [imgLoading, setImgLoading] = useState(false)
  const [installed, setInstalled] = useState(workWithStorage('getInstalled', id))
  const { width } = useWindowDimensions()
  const { tags } = useAppSelector((state) => state.dapplets)

  const hideAddress = width < 1500

  const additionalInfo = [text_1, text_2, text_3, text_4, text_5, text_6, text_7, text_8, text_9]

  const dappletTags = tags.filter(({ id }) => tagsIndexesArr.includes(id))

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       setImgLoading(true)
  //       await api.get(`files/${icon}`)
  //       setImg(`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${icon}`)
  //     } catch {
  //       setImg('https://gildasclubgr.org/wp-content/uploads/2019/02/no-image.jpg')
  //     } finally {
  //       setImgLoading(false)
  //     }
  //   }

  //   fetchImage()
  // }, [])

  const onInstallClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (installed) {
      workWithStorage('deleteInstalled', id)
      setInstalled(false)
    } else {
      workWithStorage('setInstalled', id)
      setInstalled(true)
    }
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
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
            <div className={styles.imgContainer}>
              {imgLoading ? (
                <LoadingDots />
              ) : (
                <img className={styles.img} src={img} alt='app' width={50} height={50} />
              )}
            </div>
            <div className={styles.titleInfo}>
              <h4 className={styles.title}>{title}</h4>
              <p className={styles.numbers}>
                {hideAddress ? `${address.slice(0, 4)}...${address.slice(-4)}` : address}
              </p>
            </div>
            <p className={styles.description}>{description}</p>
            <span className={styles.author}>{author}</span>
            <div className={styles.tags}>
              {dappletTags.map(({ name, id }) => (
                <Tag title={name} key={id} />
              ))}
            </div>
            <Button onClick={onInstallClick} className={installed ? styles.disabled : ''}>
              {installed ? 'Installed' : 'Install'}
            </Button>
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
