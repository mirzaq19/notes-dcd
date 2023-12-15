import Input from '@/components/form/Input'
import Section from '@/components/layout/Section'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Search = ({ className, value, setValue, ...rest }) => {
  return (
    <Section title="Cari Catatan" className={clsx(className)} {...rest}>
      <Input
        placeholder="Tuliskan judul catatan untuk mencari"
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
