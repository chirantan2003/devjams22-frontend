import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      once: true,
      offset: 30,
      duration: 350,
      delay: 200
    })
  }, [])
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content="DevJams,MLH,VIT,Vellore,Google Developer Student Club,GDSC VIT,GDSC,GDG,Google Developers,Google Developers Students Clubs,Hackathon,hackathon 2022,Community,hackathon in india,event,india, DevJams'22, DevFest, Hackathon in September, Hackathon in October, Devjams 2022,Hacks, Google hackathon, VIT hackathon, Gravitas hackathon, gravitas"
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="DevJams' 22" />
        <meta
          property='og:description'
          content="Official website for DevJams'22 by GDSC VIT Vellore."
        />
        <meta name='language' content='en' />
        <meta name='url' content='https://devjams.dscvit.com/' />
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
          content='DevJams is one of a kind hackathon conducted by Google Developer Student Clubs VIT every year to encourage tech enthusiasts from across the country to develop their ideas for the future.'
        />
        <meta
          itemprop=' description '
          content="DevJams'22, Hackathon by GDSC-VIT "
        />
        <link rel='canonical ' href='https://devjams.dscvit.com ' />
        <meta name='author' content='GDSC VIT' />
        <meta name='copyupfade-right' content='GDSC VIT' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <title>DevJams'22</title>
      </Head>

      <a
        id='mlh-trust-badge'
        className='mlh'
        href='https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-blue.svg'
          alt='Major League Hacking 2023 Hackathon Season'
        />
      </a>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
