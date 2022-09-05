import styles from './Sponsors.module.css'
import TitleIcon from '../core/TitleIcon'
import ImageDiv from './ImageDiv'

const Sponsors = () => {
  return (
    <div className='lightbg sponsors' id='sponsors'>
      <TitleIcon title='Past Sponsors' img='/sponsors.svg' />
      <div className={styles.outer}>
        <div className={styles.img}>
          <div data-aos='flip-up' data-aos-delay='300'>
            <ImageDiv
              name='/spCrowdstrike.png'
              url='https://www.crowdstrike.com/'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='450'>
            <ImageDiv name='/spGroww.png' url='https://groww.in/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='600'>
            <ImageDiv name='/spAlchemy.svg' url='https://www.alchemy.com/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='750'>
            <ImageDiv name='/spRen.png' url='https://renproject.io/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='900'>
            <ImageDiv name='/spVicara.png' url='https://vicara.co/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='1050'>
            <ImageDiv name='/spDeepnote.png' url='https://deepnote.com/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='1200'>
            <ImageDiv name='/spStickermule.svg' url='https://mule.to/p37s' />
          </div>
          <div data-aos='flip-up' data-aos-delay='1350'>
            <ImageDiv
              name='/spDigitalocean.svg'
              url='https://www.digitalocean.com/'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='1500'>
            <ImageDiv
              name='/spKaspersky.png'
              url='https://www.kaspersky.co.in/'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='1750'>
            <ImageDiv name='/spReplit.png' url='https://replit.com/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
