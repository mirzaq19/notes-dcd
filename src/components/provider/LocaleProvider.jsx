import { useState } from 'react'
import { LocaleContext } from '@/contexts/locale'

const LocaleProvider = ({ children }) => {
  const localStorageLocale = localStorage.getItem('locale')
  const [locale, setLocale] = useState(
    localStorageLocale ? localStorageLocale : 'id'
  )

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'id' ? 'en' : 'id'))
    localStorage.setItem('locale', locale === 'id' ? 'en' : 'id')
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
