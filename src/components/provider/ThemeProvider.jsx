import { useEffect, useState } from 'react'
import { ThemeContext } from '@/contexts/theme'
const ThemeProvider = ({ children }) => {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const localStorageTheme = localStorage.getItem('theme')
  const [themeMode, setThemeMode] = useState(
    localStorageTheme ? localStorageTheme : userPrefersDark ? 'dark' : 'light'
  )

  const lightTheme = () => {
    setThemeMode('light')
    localStorage.setItem('theme', 'light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
    localStorage.setItem('theme', 'dark')
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', themeMode)
    document
      .querySelector('html')
      .classList.toggle('dark', themeMode === 'dark')
    document.querySelector('html').style.colorScheme = themeMode
  }, [themeMode])
  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
