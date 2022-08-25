import Image from 'next/image'

const TitleIcon = (props) => {
  return (
    <div className='titleIcon'>
      <Image src={props.img} height='50' width='50' alt='speaker' />
      <h1>{props.title}</h1>
    </div>
  )
}

export default TitleIcon
