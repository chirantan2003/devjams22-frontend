import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className={styles.footer}>
        <div>
          <div className={styles.content}>
            <h1>Reach out to Us!</h1>
            <h2>Chanakya Kapoor</h2>
            <h3>Point of Contact</h3>
            <div className={styles.contact}>
              <Image src='/mail.svg' height='20' width='20' alt='mail' />
              <h4>chanakyavkapoor@gmail.com</h4>
            </div>
            <div className={styles.contact}>
              <Image src='/phone.svg' height='20' width='20' alt='phone' />
              <h4>+91 81304 88585</h4>
            </div>
          </div>
          <div className={styles.content}>
            <h2>Shresth Tiwary</h2>
            <h3>Point of Contact</h3>
            <div className={styles.contact}>
              <Image src='/mail.svg' height='20' width='20' alt='mail' />
              <h4>shresthtiwary11@gmail.com</h4>
            </div>
            <div className={styles.contact}>
              <Image src='/phone.svg' height='20' width='20' alt='phone' />
              <h4>+91 97429 40667</h4>
            </div>

            <div className={styles.social}>
              <Link href='/'>
                <a>
                  <Image
                    src='/instagram.svg'
                    height='25'
                    width='25'
                    alt='instagram'
                  />
                </a>
              </Link>

              <Link href='/'>
                <a>
                  <Image
                    src='/twitter.svg'
                    height='25'
                    width='25'
                    alt='twitter'
                  />
                </a>
              </Link>

              <Link href='/'>
                <a>
                  <Image
                    src='/linkedin.svg'
                    height='25'
                    width='25'
                    alt='linkedin'
                  />
                </a>
              </Link>

              <Link href='/'>
                <a>
                  <Image
                    src='/facebook.svg'
                    height='25'
                    width='25'
                    alt='facebook'
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src='/footer.svg'
            layout='responsive'
            height='1040'
            width='1040'
            alt='footer'
          />
        </div>
      </div>
      <p>
        Made with <span>&#10084;</span> by GDSC VIT
      </p>
    </div>
  )
}

export default Footer
