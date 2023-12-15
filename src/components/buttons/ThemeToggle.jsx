import useTheme from '@/contexts/theme'
import styles from '@/styles/ThemeToggle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ThemeToggle = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  const onChangeThemeHandler = () => {
    if (themeMode === 'dark') {
      lightTheme()
    } else {
      darkTheme()
    }
  }

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faSun} className={styles.theme_icon} />
      <label className={styles.toggle}>
        <input
          type="checkbox"
          value=""
          onChange={onChangeThemeHandler}
          checked={themeMode === 'dark'}
        />
        <span className={styles.slider}></span>
      </label>
      <FontAwesomeIcon icon={faMoon} className={styles.theme_icon} />
    </div>
  )
}

export default ThemeToggle
