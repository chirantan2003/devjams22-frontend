import { useEffect } from 'react'
import styles from './DiscordBtn.module.css'

const DiscordBtn = ({ discordOpen, onSetDiscordOpen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSetDiscordOpen(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [discordOpen, onSetDiscordOpen])

  return (
    <a
      href='https://dscv.it/dj22discord'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={`${styles.discord} ${discordOpen && styles.open}`}>
        <svg
          width='56'
          height='56'
          viewBox='0 0 62 62'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M43.9122 18.9458C41.4726 17.8043 38.8917 16.993 36.2378 16.5333C35.9067 17.1304 35.5217 17.9358 35.2538 18.5738C32.4349 18.1441 29.567 18.1441 26.748 18.5738C26.4524 17.8766 26.1202 17.1955 25.7529 16.5333C23.0967 16.9937 20.5138 17.8069 18.0729 18.9513C13.2164 26.2909 11.8996 33.4483 12.558 40.5033C15.3929 42.6438 18.5781 44.2757 21.9715 45.3263C22.734 44.277 23.4083 43.1666 23.9878 42.0062C22.8857 41.5861 21.8231 41.0689 20.8127 40.4605C21.0787 40.2633 21.3391 40.0569 21.5902 39.8448C27.7115 42.7074 34.361 42.7074 40.4098 39.8448C40.6646 40.0569 40.925 40.2633 41.1873 40.4605C40.181 41.0669 39.1152 41.5877 38.0067 42.008C38.5851 43.169 39.2595 44.2795 40.0229 45.3281C43.419 44.2782 46.6063 42.6449 49.442 40.5014C50.2139 32.3248 48.1233 25.2326 43.9122 18.9458ZM24.821 36.1639C22.9834 36.1639 21.4767 34.4489 21.4767 32.3602C21.4767 30.2714 22.9517 28.5527 24.821 28.5527C26.6904 28.5527 28.197 30.2676 28.1653 32.3602C28.1672 34.4489 26.6904 36.1639 24.821 36.1639ZM37.179 36.1639C35.3413 36.1639 33.8347 34.4489 33.8347 32.3602C33.8347 30.2714 35.3096 28.5527 37.179 28.5527C39.0483 28.5527 40.5549 30.2676 40.5233 32.3602C40.5233 34.4489 39.0483 36.1639 37.179 36.1639Z'
            fill='white'
          />
        </svg>
        <h1>
          {' '}
          <span> | </span>Join our Discord &nbsp;
        </h1>
      </div>
    </a>
  )
}

export default DiscordBtn