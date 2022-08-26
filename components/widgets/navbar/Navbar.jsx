import Image from 'next/image'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <a href='https://dscvit.com/' target='_blank' rel='noreferrer'>
        <Image
          src='/logo.svg'
          height='50'
          width='250'
          alt='logo'
          className={styles.logo}
        />
      </a>
      <ul className={styles.navright}>
        <a href='#hero' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Home</li>
        </a>
        <a href='#about' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>About</li>
        </a>
        <a href='#timeline' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Timeline</li>
        </a>
        <a href='#faq' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>FAQs</li>
        </a>
        <a href='#sponsors' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Sponsors</li>
        </a>
        <a href='#contacts' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Contacts</li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
