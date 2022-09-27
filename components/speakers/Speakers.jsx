import TitleIcon from '../core/TitleIcon'
import Cards from './Card'
import styles from './Speakers.module.css'

const Speakers = () => {
  return (
    <div className='darkbg speakers'>
      <TitleIcon title='Speakers' img='/speakers.svg' />
      <div className={styles.speakers}>
        <div className={styles.cards}>
          <div data-aos='flip-up' data-aos-delay='300'>
            <Cards
              name='Aanshul Sadaria'
              img='/AanshulSadaria.jfif'
              color='#FBBC04'
              designation='Software Engineer II \n Google'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='450'>
            <Cards
              name='Ashwin Goyal'
              img='/Ashwin.jpeg'
              color='#4285F4'
              designation='Group Product Manager \n Disney+Hotstar'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='600'>
            <Cards
              name='Chetan Vinchhi'
              img='/ChetanVinchhi.png'
              color='#EA4335'
              designation='Managing Director \n Uptycs'
            />
          </div>
          <div data-aos='flip-up' data-aos-delay='750'>
            <Cards
              name='Amit Malik'
              img='/AmitMalik.png'
              color='#34A853'
              designation='Principle Researcher \n Uptycs'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers
