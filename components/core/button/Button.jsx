import styles from './Button.module.css'

const Button = () => {
  return (
    <a target='_blank' href='https://devjams.hackerearth.com/' rel='noreferrer'>
      <button
        className={`${styles.button} ${styles.noselect}`}
        data-aos='zoom-in'
        data-aos-delay='900'
      >
        <span className={styles.text}>Register Now</span>
      </button>
    </a>
  )
}

export default Button
