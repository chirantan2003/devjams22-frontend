import styles from './Sponsors.module.css'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className='lightbg sponsors'>
      <h1>Past Sponsors</h1>
      <div className={styles.outer}>
        <div className={styles.img}>
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
          <Image src='/googleSp.svg' height='150' width='150' alt='sponsor' />
        </div>
      </div>
    </div>
  )
}

export default Sponsors
