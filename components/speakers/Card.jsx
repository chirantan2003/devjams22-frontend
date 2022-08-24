import Image from 'next/image'
import Introducing from '../core/button/Introducing'
import styles from './Card.module.css'

const Cards = (props) => {
  return (
    <div className={styles.outer}>
      <Introducing color={props.color} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>{props.name}</h1>
          <h2>{props.refer}</h2>
        </div>
        <div>
          <div className={styles.image}>
            <Image
              src={props.img}
              layout='fill'
              objectFit='contain'
              alt={props.name}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
