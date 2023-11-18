import Input from './Input'
import Section from './Section'

const Search = ({ value, setValue }) => {
  return (
    <Section title="Cari Catatan">
      <Input
        required={true}
        placeholder="Tuliskan judul catatan untuk mencari"
        value={value}
        onChange={setValue}
      />
    </Section>
  )
}

export default Search
