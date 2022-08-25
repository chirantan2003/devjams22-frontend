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
          <ImageDiv name='/spThedapplist.svg' url='https://thedapplist.com/' />
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
          <ImageDiv name='/spGFG.png' url='https://www.geeksforgeeks.org/' />
          <ImageDiv name='/spEcho.png' url='https://www.echo3d.co/' />
          <ImageDiv name='/spVoiceflow.png' url='https://www.voiceflow.com/' />
          <ImageDiv name='/spHashicorp.svg' url='https://www.hashicorp.com/' />
          <ImageDiv name='/spTaskade.png' url='https://www.taskade.com/' />
          <ImageDiv name='/sp1password.svg' url='https://1password.com/' />
          <ImageDiv name='/spFramer.svg' url='https://www.framer.com/' />
          <ImageDiv name='/spGenxyz.png' url='https://gen.xyz/' />
          <ImageDiv name='/spEgghead.svg' url='https://egghead.io/' />
          <ImageDiv
            name='/spHackthebox.png'
            url='https://www.hackthebox.com/'
          />
          <ImageDiv name='/spSketch.svg' url='https://www.sketch.com/' />
        </div>
      </div>
    </div>
  )
}

export default Sponsors
