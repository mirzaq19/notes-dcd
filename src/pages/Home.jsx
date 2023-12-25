import NoteList from '@/components/NoteList'
import Search from '@/components/Search'
import Section from '@/components/layout/Section'
import NoteItemSkeleton from '@/components/skeleton/NoteItemSkeleton'
import { getActiveNotes } from '@/utilities/network-data'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchNotes = async () => {
      try {
        const { data } = await getActiveNotes()
        setNotes(data)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    setTimeout(() => {
      fetchNotes()
    }, 200)
  }, [])

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
        {!loading ? (
          <NoteList notes={notesToRender} />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NoteItemSkeleton />
            <NoteItemSkeleton />
            <NoteItemSkeleton />
          </div>
        )}
      </Section>
    </div>
  )
}

export default Home
