import clsx from 'clsx'
import { useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

const IconContainer = ({ children }) => {
  return (
    <div
      className={clsx(
        'flex justify-center items-center text-2xl w-12 h-12 bg-white'
      )}
    >
      {children}
    </div>
  )
}

const ThemeButton = ({ className, ...rest }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <button
      className={clsx(
        'w-12 h-12 flex group justify-center items-start overflow-hidden',
        'border-2 border-secondary hover:border-[#c100b3] hover:text-[#c100b3] rounded-md',
        'transition-colors duration-300 ease-in-out',
        'bg-gradient-to-br from-accent-peach to-accent-grape',
        className
      )}
      onClick={() => setIsDarkMode((prev) => !prev)}
      {...rest}
    >
      <div
        className={clsx(
          'transition-transform duration-300 ease-in-out',
          isDarkMode ? 'translate-x-0' : '-translate-y-12'
        )}
      >
        <IconContainer>
          <IoMoonOutline />
        </IconContainer>
        <IconContainer>
          <IoSunnyOutline />
        </IconContainer>
      </div>
    </button>
  )
}

export default ThemeButton
