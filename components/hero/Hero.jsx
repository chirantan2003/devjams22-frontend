import Image from 'next/image'
import Button from '../core/button/Button'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className={styles.text} data-aos='zoom-in'>
        <Image src='/devjams.svg' height='100' width='350' alt='Devjams22' />
        <p>
          DevJams is one of a kind hackathon conducted by Google Developer
          Student Clubs VIT every year to encourage tech enthusiasts from across
          the country to develop their ideas for the future.
        </p>
        <div className={styles.button}>
          <Button />
        </div>
      </div>

      <div className={styles.img} data-aos='zoom-out-left' data-aos-delay='500'>
        <Image
          src='/hero.svg'
          layout='fill'
          objectFit='contain'
          alt='devjamsHero'
        />
      </div>
    </div>
  )
}

export default Hero
