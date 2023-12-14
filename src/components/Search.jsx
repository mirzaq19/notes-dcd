import Input from '@/components/Input'
import Section from '@/components/Section'

const Search = ({ value, setValue }) => {
  return (
    <Section title="Cari Catatan">
      <Input
        required={false}
        placeholder="Tuliskan judul catatan untuk mencari"
        value={value}
        setValue={setValue}
      />
    </Section>
  )
}

export default Search
