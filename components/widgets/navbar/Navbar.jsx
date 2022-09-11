import Image from 'next/image'
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

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
        <Link to='hero' spy smooth duration={500}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>Home</li>
          </div>
        </Link>
        <Link to='about' spy smooth duration={500}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>About</li>
          </div>
        </Link>

        <Link to='timeline' spy smooth duration={500}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>Timeline</li>
          </div>
        </Link>

        <Link to='faq' spy smooth duration={500}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>FAQs</li>
          </div>
        </Link>

        <Link to='sponsors' spy smooth duration={500}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>Sponsors</li>
          </div>
        </Link>

        <Link to='contacts' spy smooth duration={500}>
          {' '}
          <div className={styles.item}>
            <li className={styles.navitem}>Contacts</li>
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
