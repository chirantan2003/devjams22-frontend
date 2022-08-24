import Image from 'next/image'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Image
        src='/logo.svg'
        height='1'
        width='250'
        alt='logo'
        className={styles.logo}
      />
      <ul className={styles.navright}>
        <a href='#' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Home</li>
        </a>
        <a href='#' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>About GDSC</li>
        </a>
        <a href='#' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Timeline</li>
        </a>
        <a href='#' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>FAQs</li>
        </a>
        <a href='#' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Sponsors</li>
        </a>
        <a href='Sponsors' className={styles.navitem}>
          {' '}
          <li className={styles.navitem}>Contacts</li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
