import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  lightTheme: () => {},
  darkTheme: () => {},
})

export default function useTheme() {
  return useContext(ThemeContext)
}
