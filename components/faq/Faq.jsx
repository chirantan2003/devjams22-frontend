import styles from './Faq.module.css'
import { Accordion } from '@mantine/core'
import faq from './FaqData'
import Baner from './Baner'

const Faq = () => {
  return (
    <div className='darkbg faq' id='faq'>
      <h1>FAQs</h1>
      {faq.map((props) => {
        return (
          <>
            <Accordion
              key={props.key}
              variant='filled'
              radius='md'
              defaultValue='customization'
              className={styles.outer}
            >
              <Accordion.Item value='flexibility'>
                <Baner
                  question={props.question}
                  answer={props.answer}
                  color={props.color}
                />
              </Accordion.Item>
            </Accordion>
          </>
        )
      })}

      <Accordion
        variant='contained'
        radius='md'
        defaultValue='customization'
        className={styles.outer}
      >
        <Accordion.Item value='flexibility'>
          <Accordion.Control className={`${styles.open} ${styles.yellow}`}>
            I still have some doubts regarding the event. How can I get them
            resolved?
          </Accordion.Control>

          <Accordion.Panel className={styles.yellowbg}>
            <p className='text'>
              Feel free to ping us on{' '}
              <u>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://twitter.com/gdscvit'
                >
                  Twitter
                </a>
              </u>
              , on{' '}
              <u>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.instagram.com/gdscvitvellore/'
                >
                  Instagram
                </a>
              </u>{' '}
              or you can mail us at{' '}
              <u>
                <a href='mailto:dscvitvellore@gmail.com'>
                  dscvitvellore@gmail.com
                </a>
              </u>{' '}
              at any time of the day. We will try to respond as soon as
              possible!
            </p>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Faq
