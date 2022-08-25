import TitleIcon from '../core/TitleIcon'
import Cards from './Card'
import styles from './Speakers.module.css'

const Speakers = () => {
  return (
    <div className='darkbg speakers'>
      <TitleIcon title='Past Speakers' img='/speakers.svg' />
      <div className={styles.speakers}>
        <div className={styles.cards}>
          <Cards
            name='Prateek Narang'
            img='/PrateekNarang.jpg'
            color='#FBBC04'
            designation='Founder, Coding Minutes'
          />
          <Cards
            name='Neeraj Singh'
            img='/NeerajSingh.jpg'
            color='#4285F4'
            designation='Co-founder and CTO, Groww'
          />
          <Cards
            name='Dinesh Punni'
            img='/DineshPunni.jpeg'
            color='#EA4335'
            designation='Founder, Immersive insiders'
          />
          <Cards
            name='Riddhi Dutta'
            img='/RiddhiDutta.jpeg'
            color='#34A853'
            designation='Software Engineer, Amazon'
          />
        </div>
      </div>
    </div>
  )
}

export default Speakers
