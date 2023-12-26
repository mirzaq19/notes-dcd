import { createContext, useContext } from 'react'

export const LocaleContext = createContext({
  locale: 'id',
  toggleLocale: () => {},
})

export default function useLocale() {
  return useContext(LocaleContext)
}
