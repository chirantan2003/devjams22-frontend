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
            name='/spCrowdstrike.png'
            url='https://www.crowdstrike.com/'
          />
          <ImageDiv name='/spGroww.png' url='https://groww.in/' />
          <ImageDiv name='/spAlchemy.svg' url='https://www.alchemy.com/' />
          <ImageDiv name='/spRen.png' url='https://renproject.io/' />
          <ImageDiv name='/spVicara.png' url='https://vicara.co/' />
          <ImageDiv name='/spDeepnote.png' url='https://deepnote.com/' />
          <ImageDiv name='/spStickermule.svg' url='https://mule.to/p37s' />
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
