// import NoteList from './components/NoteList'
// import Layout from './components/Layout'
// import NotesForm from './components/NotesForm'
// import Search from './components/Search'
// import ThemeWrapper from './components/ThemeWrapper'
// import { getInitialData } from './utilities/getData'
// import { useEffect, useState } from 'react'

// function App() {
//   const [notes, setNotes] = useState(getInitialData)
//   const [searchNotes, setSearchNotes] = useState([])
//   const [keyword, setKeyword] = useState('')

//   const onArchiveHandler = (id) => {
//     const newNotes = notes.map((note) => {
//       if (note.id === id) {
//         return { ...note, archived: !note.archived }
//       }
//       return note
//     })
//     setNotes(newNotes)
//   }

//   const onDeleteHandler = (id) => {
//     const newNotes = notes.filter((note) => note.id !== id)
//     setNotes(newNotes)
//   }

//   const onAddNoteHandler = (note) => {
//     setNotes([
//       ...notes,
//       {
//         ...note,
//         id: +new Date(),
//         archived: false,
//         createdAt: new Date().toISOString(),
//       },
//     ])
//   }

//   useEffect(() => {
//     const newNotes = notes.filter((note) => {
//       const title = note.title.toLowerCase()
//       return title.includes(keyword.toLowerCase())
//     })
//     setSearchNotes(newNotes)
//   }, [keyword, notes])

//   return (
//     <ThemeWrapper>
//       <Layout>
//         <NotesForm onAddNote={onAddNoteHandler} />
//         <Search value={keyword} setValue={(value) => setKeyword(value)} />
//         <NoteList
//           notes={searchNotes}
//           onArchive={onArchiveHandler}
//           onDelete={onDeleteHandler}
//         />
//       </Layout>
//     </ThemeWrapper>
//   )
// }

// export default App
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'

function App() {
  return (
    <>
      <header>
        <h1>NotesApp</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
