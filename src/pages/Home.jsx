import NoteList from '@/components/NoteList'
import Search from '@/components/Search'
import Section from '@/components/layout/Section'
import { getActiveNotes } from '@/utilities/data'
import { useState } from 'react'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [notes] = useState(getActiveNotes())

  const notesToRender = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <div className="min-h-main">
      <Search value={keyword} setValue={(value) => setKeyword(value)} />
      <Section title="Catatan Aktif">
        <NoteList notes={notesToRender} />
      </Section>
    </div>
  )
}

export default Home
