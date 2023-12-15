import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>&copy; NotesApp 2023 | Made with</span>
        <FontAwesomeIcon icon={faHeart} className={styles.heart} />
        <span>
          by{' '}
          <a
            href="https://github.com/mirzaq19"
            target="_blank"
            rel="noreferrer"
            className={styles.animated_link}
          >
            Mirzaq
          </a>
        </span>
      </p>
      <p className="social-media">
        <a
          href="https://linkedin.com/in/mirzaq"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.social_icon} />
        </a>
        <a href="https://github.com/mirzaq19" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.social_icon} />
        </a>
      </p>
    </footer>
  )
}

export default Footer
