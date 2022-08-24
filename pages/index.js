import Footer from '../components/widgets/footer/Footer'
import Speakers from '../components/speakers/Speakers'
import Navbar from '../components/widgets/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero/Hero'
import Sponsors from '../components/sponsors/Sponsors'
import About from '../components/about/About'
import Timeline from '../components/timeline/Timeline'

export default function Home () {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Hero />
        <About />
        <Speakers />
        <Timeline />
        <Sponsors />
      </div>
      <Footer />
    </>
  )
}
