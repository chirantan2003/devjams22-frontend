import { Accordion } from '@mantine/core'
import styles from './Faq.module.css'

export default function Baner (props) {
  let fontColor = ''
  let bgColor = ''
  if (props.color === 'red') {
    fontColor = styles.red
    bgColor = styles.redbg
  } else if (props.color === 'yellow') {
    fontColor = styles.yellow
    bgColor = styles.yellowbg
  } else if (props.color === 'green') {
    fontColor = styles.green
    bgColor = styles.greenbg
  } else if (props.color === 'blue') {
    fontColor = styles.blue
    bgColor = styles.bluebg
  }

  return (
    <div>
      <Accordion.Control className={`${styles.open} ${fontColor}`}>
        {props.question}
      </Accordion.Control>
      <Accordion.Panel className={bgColor}>
        <p>{props.answer}</p>
      </Accordion.Panel>
    </div>
  )
}
