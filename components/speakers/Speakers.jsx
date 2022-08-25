import TitleIcon from '../core/TitleIcon'
import Cards from './Card'
import styles from './Speakers.module.css'

const Speakers = () => {
  return (
    <div className='darkbg'>
      <TitleIcon title='Past Speakers' img='/speakers.svg' />
      <div className={styles.speakers}>
        <div className={styles.cards}>
          <Cards
            name='Prateek Narang'
            img='/PrateekNarang.jpg'
            color='#FBBC04'
            refer='he/him'
          />
          <Cards
            name='Neeraj Singh'
            img='/NeerajSingh.jpg'
            color='#4285F4'
            refer='he/him'
          />
          <Cards
            name='Dinesh Punni'
            img='/DineshPunni.jpeg'
            color='#EA4335'
            refer='he/him'
          />
          <Cards
            name='Riddhi Dutta'
            img='/RiddhiDutta.jpeg'
            color='#34A853'
            refer='she/her'
          />
          <Cards
            name='Sudhakar'
            img='/Sudhakar.jpeg'
            color='#FBBC04'
            refer='he/him'
          />
          <Cards
            name='Allan Campopiano'
            img='/AllanCampopiano.jpeg'
            color='#4285F4'
            refer='he/him'
          />
          <Cards
            name='Jason Shah'
            img='/JasonShah.jpeg'
            color='#EA4335'
            refer='he/him'
          />
          <Cards name='Saket' img='/Saket.jpg' color='#34A853' refer='he/him' />
          <Cards
            name='John Francis'
            img='/JohnFrancis.jpg'
            color='#FBBC04'
            refer='he/him'
          />
          <Cards
            name='Aanshul Sadaria'
            img='/AanshulSadaria.jpg'
            color='#4285F4'
            refer='he/him'
          />
        </div>
      </div>
    </div>
  )
}

export default Speakers
