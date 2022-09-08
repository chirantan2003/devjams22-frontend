import Image from 'next/image'
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [hide, setHide] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setHide(true)
    } else {
      setHide(false)
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div className={`${styles.nav} ${hide && styles.hidden}`}>
      <a href='https://dscvit.com/' target='_blank' rel='noreferrer'>
        <div className={styles.logo}>
          <Image src='/logo.svg' height={50} width={250} alt='logo' />
        </div>
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
