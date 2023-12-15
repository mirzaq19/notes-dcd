import NoteList from '@/components/NoteList'
import Search from '@/components/Search'
import Section from '@/components/layout/Section'
import { getActiveNotes } from '@/utilities/data'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  const [notes] = useState(getActiveNotes())

  const notesToRender = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  )

  const onSearchHandler = (value) => {
    setSearchParams({ keyword: value })
  }

  return (
    <div className="min-h-main">
      <Search value={keyword} setValue={onSearchHandler} />
      <Section title="Catatan Aktif">
        <NoteList notes={notesToRender} />
      </Section>
    </div>
  )
}

export default Home
