import styles from './Timeline.module.css'
import TitleIcon from '../core/TitleIcon'

const Timeline = () => {
  return (
    <div className='lightbg' id='timeline'>
      <TitleIcon title='Timeline' img='/timeline.svg' />
      <div className={styles.outer}>
        <h2>Coming Soon!</h2>
      </div>
    </div>
  )
}

export default Timeline
