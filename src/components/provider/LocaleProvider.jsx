import { useState } from 'react'
import { LocaleContext } from '@/contexts/locale'

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('id')

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'id' ? 'en' : 'id'))
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
