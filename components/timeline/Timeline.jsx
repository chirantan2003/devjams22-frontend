import styles from './Timeline.module.css'
import TitleIcon from '../core/TitleIcon'
import ImageGallery from 'react-image-gallery'

const Timeline = () => {
  const images = [
    {
      original: 'timeline1.svg'
    },
    {
      original: 'timeline2.svg'
    },
    {
      original: 'timeline3.svg'
    }
  ]

  function renderLeftNav (onClick, disabled) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles.navbutton} ${styles.left}`}
      >
        <i className='fa fa-angle-left' />
      </button>
    )
  }

  function renderRightNav (onClick, disabled) {
    return (
      <button
        type='button'
        disabled={disabled}
        onClick={onClick}
        aria-label='Next Slide'
        className={`${styles.navbutton} ${styles.right}`}
      >
        <i className='fa fa-angle-right' />
      </button>
    )
  }

  return (
    <div className='lightbg' id='timeline'>
      <TitleIcon title='Timeline' img='/timeline.svg' />
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets
        infinite={false}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
      />
    </div>
  )
}

export default Timeline
