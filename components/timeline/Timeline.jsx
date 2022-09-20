import styles from './Timeline.module.css'
import TitleIcon from '../core/TitleIcon'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div className='lightbg' id='timeline'>
      <TitleIcon title='Timeline' img='/timeline.svg' />
      <div className={styles.outer}>
        <Image
          src='/timelineImg.svg'
          layout='fill'
          objectFit='contain'
          alt='Timeline'
        />
      </div>
    </div>
  )
}

export default Timeline
