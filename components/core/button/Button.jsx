import styles from './Button.module.css'

const Button = () => {
  return (
    <button className={`${styles.button} ${styles.noselect}`}>
      <span className={styles.text}>Register Now</span>
    </button>
  )
}

export default Button
