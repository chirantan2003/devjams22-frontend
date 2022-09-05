import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className='footer' id='contacts'>
      <div className={styles.footer} data-aos='fade-in' data-aos-delay='600'>
        <div>
          <div className={styles.content}>
            <h1>Reach out to Us!</h1>
            <h2>Chanakya Kapoor</h2>
            <h3>Point of Contact</h3>
            <div className={styles.contact}>
              <Image src='/mail.svg' height='20' width='20' alt='mail' />
              <a
                className='text-sm sm:text-md hover:text-jams_blue'
                href='mailto:chanakyavkapoor@gmail.com'
              >
                <h4>chanakyavkapoor@gmail.com</h4>
              </a>
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
              <a
                className='text-sm sm:text-md hover:text-jams_blue'
                href='shresthtiwary11@gmail.com'
              >
                <h4>shresthtiwary11@gmail.com</h4>
              </a>
            </div>
            <div className={styles.contact}>
              <Image src='/phone.svg' height='20' width='20' alt='phone' />
              <h4>+91 97429 40667</h4>
            </div>

            <div className={styles.social}>
              <a
                href='https://instagram.com/gdscvitvellore'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/instagram.svg'
                  height='25'
                  width='25'
                  alt='instagram'
                />
              </a>

              <a
                href='https://twitter.com/gdscvit'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/twitter.svg'
                  height='25'
                  width='25'
                  alt='twitter'
                />
              </a>

              <a
                href='https://www.linkedin.com/company/dscvit'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/linkedin.svg'
                  height='25'
                  width='25'
                  alt='linkedin'
                />
              </a>

              <a
                href='https://facebook.com/gdscvitvellore'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/facebook.svg'
                  height='25'
                  width='25'
                  alt='facebook'
                />
              </a>
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
