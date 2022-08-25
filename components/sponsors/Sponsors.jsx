import styles from './Sponsors.module.css'
import TitleIcon from '../core/TitleIcon'
import ImageDiv from './ImageDiv'

const Sponsors = () => {
  return (
    <div className='lightbg sponsors' id='sponsors'>
      <TitleIcon title='Past Sponsors' img='/sponsors.svg' />
      <div className={styles.outer}>
        <div className={styles.img}>
          <ImageDiv
            name='/spCrowdstrike.svg'
            url='https://www.crowdstrike.com/'
          />
          <ImageDiv name='/spGroww.png' url='https://groww.in/' />
          <ImageDiv name='/spAlchemy.svg' url='https://www.alchemy.com/' />
          <ImageDiv name='/spRen.png' url='https://renproject.io/' />
          <ImageDiv name='/spVicara.png' url='https://vicara.co/' />
          <ImageDiv name='/spDeepnote.png' url='https://deepnote.com/' />
          <ImageDiv name='/spKumospace.png' url='https://www.kumospace.com/' />
          <ImageDiv
            name='/spDigitalocean.svg'
            url='https://www.digitalocean.com/'
          />
          <ImageDiv
            name='/spKaspersky.png'
            url='https://www.kaspersky.co.in/'
          />
          <ImageDiv name='/spReplit.png' url='https://replit.com/' />
        </div>
      </div>
    </div>
  )
}

export default Sponsors
