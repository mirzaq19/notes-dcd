import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from './contexts/theme'

function App() {
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
    document.querySelector('body').setAttribute('data-theme', themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Layout></Layout>
    </ThemeProvider>
  )
}

export default App
