import useTheme from '../contexts/theme'
import styles from './ThemeToggle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ThemeToggle = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  const onChangeTheme = () => {
    if (themeMode === 'dark') {
      lightTheme()
    } else {
      darkTheme()
    }
  }

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faSun} />
      <label className={styles.toggle}>
        <input
          type="checkbox"
          value=""
          onChange={onChangeTheme}
          checked={themeMode === 'dark'}
        />
        <span className={styles.slider}></span>
      </label>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  )
}

export default ThemeToggle
