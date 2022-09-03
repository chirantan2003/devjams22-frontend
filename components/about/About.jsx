import styles from './About.module.css'
import Image from 'next/image'

const About = () => {
  const vit =
    'https://www.google.com/maps/place/Vellore+Institute+of+Technology/@12.9692232,79.1537449,17z/data=!3m1!4b1!4m5!3m4!1s0x3bad479f0ccbe067:0xfef222e5f36ecdeb!8m2!3d12.9692232!4d79.1559336'
  return (
    <div className='about' id='about'>
      <div className={styles.outer}>
        <div className={styles.text} data-aos='fade-up-right'>
          <button className={styles.location}>
            <a href={vit} target='_blank' rel='noreferrer'>
              <Image
                src='/location.svg'
                height='25'
                width='18'
                alt='location'
              />
              <p>VIT, Vellore</p>
            </a>
          </button>
          <h2>About DevJams&rsquo;22</h2>
          <p>
            DevJams is one of a kind hackathon conducted by Google Developer
            Student Clubs VIT every year to encourage tech enthusiasts from
            across the country to develop their ideas for the future. The
            hackathon focuses on providing students and upcoming entrepreneurs
            with a platform to develop, compete, network and present their ideas
            to solve real-world problems. We have been successfully conducting
            DevJams (previously known as Devfest) for 6 years now. DevJams’22
            will be the seventh edition through which we hope to bring
            innovative minds from all around the globe under one banner.
          </p>
        </div>
        <div className={styles.img} data-aos='fade-up-left'>
          <Image
            src='/aboutRight.svg'
            layout='fill'
            objectFit='contain'
            alt='imgRight'
          />
        </div>
      </div>

      <div className={`${styles.outer} ${styles.vitouter}`}>
        <div
          className={`${styles.img} ${styles.vit}`}
          data-aos='fade-down-right'
        >
          <Image
            src='/aboutVit.svg'
            layout='fill'
            objectFit='contain'
            alt='imgRight'
          />
        </div>
        <div
          className={`${styles.text} ${styles.right}`}
          data-aos='fade-down-left'
        >
          <h2>About Vellore Institute of Technology</h2>
          <p>
            Vellore Institute of Technology, Vellore founded in 1984 is one of
            the largest and top-rated engineering colleges in India. It is a
            highly diverse campus with students from all around the globe. Its
            aspiring and dedicated students are the key to its reputation. The
            global standards set at VIT in the field of teaching and research
            spur us on in our relentless pursuit of excellence.
          </p>
        </div>
      </div>
      <div className={styles.gdsc} data-aos='flip-up'>
        <h2>About GDSC</h2>
        <p>
          GDSC VIT powered by Google Developers is a student community at VIT,
          Vellore. We strive to bring about technological innovations among
          students and we do so by providing a platform for them to exhibit
          their talents. We are a group of passionate designers, developers, and
          managers who work together to bring about collaborative results that
          better the lives of everyone around us.
        </p>
        <Image
          src='/GDSC.svg'
          layout='responsive'
          width='1100'
          height='300'
          alt='GDSC'
        />
      </div>
    </div>
  )
}

export default About
