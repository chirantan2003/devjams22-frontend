import Image from 'next/image'
import Introducing from '../core/button/Introducing'
import styles from './Card.module.css'

const Cards = (props) => {
  return (
    <div className={styles.outer}>
      <Introducing color={props.color} />
      <div className={styles.image}>
        <Image
          src={props.img}
          layout='fill'
          objectFit='cover'
          alt={props.name}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>{props.name}</h1>
          <h3>
            {props.designation.split('\\n').map((line) => (
              <p>{line}</p>
            ))}
          </h3>
        </div>
        <div />
      </div>
    </div>
  )
}

export default Cards
