import { useState, useEffect } from 'react'
import Footer from '../components/widgets/footer/Footer'
import Speakers from '../components/speakers/Speakers'
import Navbar from '../components/widgets/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero/Hero'
import Sponsors from '../components/sponsors/Sponsors'
import About from '../components/about/About'
import Timeline from '../components/timeline/Timeline'
import Register from '../components/register/Register'
import Faq from '../components/faq/Faq'
import DiscordBtn from '../components/core/button/DiscordBtn'

export default function Home () {
  const [discordOpen, setDiscordOpen] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [inView, setInView] = useState(1)

  const scrollHook = () => {
    setDiscordOpen(true)
  }

  useEffect(scrollHook, [inView])

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Hero id='#hero' />
        <About id='#about' />
        <Speakers />
        <Timeline id='#timeline' />
        <Sponsors id='#sponsors' />
        <Faq id='#faq' />
        <Register />
      </div>
      <Footer id='#contacts' />
      <DiscordBtn discordOpen={discordOpen} onSetDiscordOpen={setDiscordOpen} />
    </>
  )
}
