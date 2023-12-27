import Input from '@/components/form/Input'
import Section from '@/components/layout/Section'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { search as searchLocale } from '@/utilities/locale-data'
import useLocale from '@/contexts/locale'

const Search = ({ className, value, setValue, ...rest }) => {
  const { locale } = useLocale()

  return (
    <Section
      divider
      title={searchLocale[locale].title}
      className={clsx(className)}
      {...rest}
    >
      <Input
        placeholder={searchLocale[locale].placeholder}
        value={value}
        setValue={setValue}
      />
    </Section>
  )
}

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Search
