import styles from './Sponsors.module.css'
import TitleIcon from '../core/TitleIcon'
import ImageDiv from './ImageDiv'

const Sponsors = () => {
  return (
    <div className='lightbg sponsors' id='sponsors'>
      <TitleIcon title='Sponsors' img='/sponsors.svg' />
      <div className={styles.outer}>
        <div className={styles.img}>
          <div data-aos='flip-up' data-aos-delay='300'>
            <ImageDiv name='/spUptycs.png' url='https://www.uptycs.com/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='450'>
            <ImageDiv
              name='/spBluelearn.svg'
              url='https://www.bluelearn.in/?src=gdsc-vit-vellore'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='600'>
            <ImageDiv name='/spAlgorand.svg' url='https://www.algorand.com/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='750'>
            <ImageDiv name='/spStickermule.svg' url='https://mule.to/p37s' />
          </div>
          <div data-aos='flip-up' data-aos-delay='900'>
            <ImageDiv
              name='/spGithub.png'
              url='https://github.com/?src=gdsc-vit-vellore'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='1050'>
            <ImageDiv
              name='/spAuth0.png'
              url='https://auth0.com/?src=gdsc-vit-vellore'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='1200'>
            <ImageDiv
              name='/spLinode.png'
              url='https://www.linode.com/?src=gdsc-vit-vellore'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='1350'>
            <ImageDiv
              name='/spTwillo.svg'
              url='https://www.twilio.com/?src=gdsc-vit-vellore'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='1500'>
            <ImageDiv
              name='/spGodaddy.svg'
              url='https://www.godaddy.com/en-in?src=gdsc-vit-vellore'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='1750'>
            <ImageDiv name='/spHedera.png' url='https://hedera.com/' />
          </div>
          <div data-aos='flip-up' data-aos-delay='1750'>
            <ImageDiv name='/spAbinbev.png' url='https://www.ab-inbev.com/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
