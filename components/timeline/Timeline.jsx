import styles from './Timeline.module.css'
import TitleIcon from '../core/TitleIcon'
import { Carousel } from '@mantine/carousel'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div className='lightbg' id='timeline'>
      <TitleIcon title='Timeline' img='/timeline.svg' />
      <div className={styles.outer1}>
        <Carousel
          height='100%'
          sx={{ flex: 1 }}
          controlSize={55}
          mx='auto'
          slideGap='md'
          align='start'
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default'
              }
            }
          }}
        >
          <Carousel.Slide className={styles.box}>
            <Image src='timeline1.svg' layout='fill' />
          </Carousel.Slide>
          <Carousel.Slide className={styles.box}>
            <Image src='timeline2.svg' layout='fill' />
          </Carousel.Slide>
          <Carousel.Slide className={styles.box}>
            <Image src='timeline3.svg' layout='fill' />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  )
}

export default Timeline
