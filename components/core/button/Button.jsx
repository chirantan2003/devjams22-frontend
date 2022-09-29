import styles from './Button.module.css'

const Button = () => {
  return (
    <a target='_blank' href='https://devjams.hackerearth.com/' rel='noreferrer'>
      <button className={`${styles.button} ${styles.noselect}`}>
        <span className={styles.text}>Registration Closed</span>
      </button>
    </a>
  )
}

export default Button
