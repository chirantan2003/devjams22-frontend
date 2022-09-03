import Head from 'next/head'
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

export default function Home () {
  return (
    <>
      <Head>
        <title>DevJams'22</title>
        <meta charset='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='DevJams,MLH,VIT,Vellore,Google Developer Student Clubs,GDSC VIT,GDSC,GDG,Google Developers,Google Developers Students Clubs,Hackathon,hackathon 2022,hackathon 2021,Community,hackathon in india,event,india'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="DevJams' 22" />
        <meta
          property='og:description'
          content="Official website for DevJams'22 by GDSC VIT Vellore."
        />
        <meta name='language' content='en' />
        <meta name='url' content='https://http://devjams.dscvit.com/' />
        <meta name='category' content='Devjams' />
        <meta name='coverage' content='Worldwide' />
        <meta name='copyright' content='GDSC-VIT' />
        <meta property='og:url' content='https://devjams.dscvit.com' />
        <meta property='og:site_name' content="DevJams'22" />
        <meta property='og:image' content='/favicon.png' />
        <meta name='og:email' content='dscvitvellore@gmail.com' />
        <meta name='og:region' content='Vellore' />
        <meta name='og:country-name' content='India' />
        <meta name='rating' content='General' />
        <meta name='twitter:card' content='website' />
        <meta name='twitter:site' content="DevJams'22, Hackathon by GDSC-VIT" />
        <meta name='twitter:title' content="DevJams'22" />
        <meta
          name='twitter:description '
          content="DevJams'22, Hackathon by GDSC-VIT"
        />
        <meta name='twitter:creator ' content='gdscvit' />
        <meta itemprop='name ' content="DevJams'22, Hackathon by GDSC-VIT" />
        <meta
          name='description'
          content='A hackathon conducted by GDSC-VIT, that brings together great developers and designers under one roof and pits them against each other in healthy competition.'
        />
        <meta
          itemprop=' description '
          content="DevJams'22, Hackathon by GDSC-VIT "
        />
        <link rel='canonical ' href='https://devjams.dscvit.com ' />
        <meta name='author' content='GDSC VIT' />
        <meta name='copyupfade-right' content='GDSC VIT' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <Hero />
        <About />
        <Speakers />
        <Timeline />
        <Sponsors />
        <Faq />
        <Register />
      </div>
      <Footer />
    </>
  )
}
