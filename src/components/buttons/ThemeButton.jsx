import useTheme from '@/contexts/theme'
import clsx from 'clsx'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import PropTypes from 'prop-types'

const IconContainer = ({ children }) => {
  return (
    <div
      className={clsx(
        'flex justify-center items-center text-2xl w-12 h-12 bg-white dark:bg-dark'
      )}
    >
      {children}
    </div>
  )
}

IconContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const ThemeButton = ({ className, ...rest }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  const onThemeChangeHandler = () => {
    if (themeMode === 'dark') {
      lightTheme()
    } else {
      darkTheme()
    }
  }

  return (
    <button
      className={clsx(
        'w-12 h-12 flex group justify-center items-start overflow-hidden',
        'border border-secondary hover:border-accent-peach hover:text-accent-peach rounded-md',
        'transition-colors duration-300 ease-in-out',
        'bg-gradient-to-br from-accent-peach to-accent-grape',
        className
      )}
      onClick={onThemeChangeHandler}
      {...rest}
    >
      <div
        className={clsx(
          'transition-transform duration-300 ease-in-out',
          themeMode === 'dark' ? '-translate-y-12' : 'translate-x-0'
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

ThemeButton.propTypes = {
  className: PropTypes.string,
}

export default ThemeButton
