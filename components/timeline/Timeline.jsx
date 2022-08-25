import styles from './Timeline.module.css'
import TitleIcon from '../core/TitleIcon'

const Timeline = () => {
  return (
    <div className='lightbg'>
      <TitleIcon title='Timeline' img='/timeline.svg' />
      <div className={styles.outer} />
    </div>
  )
}

export default Timeline
