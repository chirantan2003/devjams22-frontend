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
          <div className={styles.item}>
            <li className={styles.navitem}>Home</li>
          </div>
        </a>
        <a href='#about' className={styles.navitem}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>About</li>
          </div>
        </a>
        <a href='#timeline' className={styles.navitem}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>Timeline</li>
          </div>
        </a>
        <a href='#faq' className={styles.navitem}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>FAQs</li>
          </div>
        </a>
        <a href='#sponsors' className={styles.navitem}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>Sponsors</li>
          </div>
        </a>
        <a href='#contacts' className={styles.navitem}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>Contacts</li>
          </div>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
