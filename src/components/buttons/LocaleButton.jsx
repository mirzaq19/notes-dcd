import PropTypes from 'prop-types'
import ToggleButton from '@/components/buttons/ToggleButton'
import IDFlag from '@/assets/id.svg'
import ENFlag from '@/assets/en.svg'
import useLocale from '@/contexts/locale'

const LocaleButton = ({ className, ...rest }) => {
  const { locale, toggleLocale } = useLocale()

  return (
    <ToggleButton
      className={className}
      firstEl={<img className="w-6" src={IDFlag} alt="id" />}
      secondEl={<img className="w-6" src={ENFlag} alt="en" />}
      onClick={toggleLocale}
      toggleCallback={() => locale === 'id'}
      {...rest}
    />
  )
}

LocaleButton.propTypes = {
  className: PropTypes.string,
}

export default LocaleButton
