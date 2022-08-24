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
      <ul className={styles.navRight}>
        <a href='#' className={styles.navItem}>
          {' '}
          <li className={styles.navItem}>Home</li>
        </a>
        <a href='#' className={styles.navItem}>
          {' '}
          <li className={styles.navItem}>About GDSC</li>
        </a>
        <a href='#' className={styles.navItem}>
          {' '}
          <li className={styles.navItem}>Timeline</li>
        </a>
        <a href='#' className={styles.navItem}>
          {' '}
          <li className={styles.navItem}>FAQs</li>
        </a>
        <a href='#' className={styles.navItem}>
          {' '}
          <li className={styles.navItem}>Sponsors</li>
        </a>
        <a href='Sponsors' className={styles.navItem}>
          {' '}
          <li className={styles.navItem}>Contacts</li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
