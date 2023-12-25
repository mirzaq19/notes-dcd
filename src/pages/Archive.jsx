import NoteList from '@/components/NoteList'
import Search from '@/components/Search'
import Section from '@/components/layout/Section'
import NoteItemSkeleton from '@/components/skeleton/NoteItemSkeleton'
import { getArchivedNotes } from '@/utilities/network-data'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Archive = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true)
      try {
        const { data } = await getArchivedNotes()
        setNotes(data)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
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
      <Section title="Arsip Catatan">
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

export default Archive
