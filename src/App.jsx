import NoteList from './components/NoteList'
import Layout from './components/Layout'
import NotesForm from './components/NotesForm'
import Search from './components/Search'
import ThemeWrapper from './components/ThemeWrapper'
import getData from './utilities/getData'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState(getData())
  const [searchText, setSearchText] = useState('')

  const onArchiveHandler = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }
      }
      return note
    })
    setNotes(newNotes)
  }

  const onDeleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const onAddNoteHandler = (note) => {
    setNotes([
      ...notes,
      {
        ...note,
        id: +new Date(),
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ])
  }

  return (
    <ThemeWrapper>
      <Layout>
        <NotesForm onAddNote={onAddNoteHandler} />
        <Search value={searchText} setSearchText={setSearchText} />
        <NoteList
          notes={notes}
          onArchive={onArchiveHandler}
          onDelete={onDeleteHandler}
        />
      </Layout>
    </ThemeWrapper>
  )
}

export default App
