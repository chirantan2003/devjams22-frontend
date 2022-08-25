import Image from 'next/image'
import styles from './Sponsors.module.css'

const ImageDiv = (props) => {
  return (
    <a target='_blank' href={props.url} rel='noreferrer'>
      <div className={styles.circle}>
        <Image
          src={props.name}
          layout='fill'
          objectFit='contain'
          alt='Sponsor'
        />
      </div>
    </a>
  )
}

export default ImageDiv
