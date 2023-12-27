import useTheme from '@/contexts/theme'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import PropTypes from 'prop-types'
import ToggleButton from '@/components/buttons/ToggleButton'

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
    <ToggleButton
      className={className}
      firstEl={<IoMoonOutline />}
      secondEl={<IoSunnyOutline />}
      onClick={onThemeChangeHandler}
      toggleCallback={() => themeMode === 'dark'}
      {...rest}
    />
  )
}

ThemeButton.propTypes = {
  className: PropTypes.string,
}

export default ThemeButton
