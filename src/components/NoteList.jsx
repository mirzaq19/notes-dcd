import NoteItem from './NoteItem'
import Section from './Section'
import styles from './NoteList.module.scss'

const NoteList = ({ notes, onArchive, onDelete }) => {
  const activeNotes = notes.filter((note) => !note.archived)
  const archivedNotes = notes.filter((note) => note.archived)
  return (
    <>
      <Section title="Catatan Aktif">
        <div className={styles.cards}>
          {activeNotes.length > 0 ? (
            activeNotes.map((note) => (
              <NoteItem
                key={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                createdAt={note.createdAt}
                onArchive={() => onArchive(note.id)}
                onDelete={() => onDelete(note.id)}
              />
            ))
          ) : (
            <p>Tidak ada catatan aktif</p>
          )}
        </div>
      </Section>
      <Section title="Arsip">
        <div className={styles.cards}>
          {archivedNotes.length > 0 ? (
            archivedNotes.map((note) => (
              <NoteItem
                key={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                createdAt={note.createdAt}
                onArchive={() => onArchive(note.id)}
                onDelete={() => onDelete(note.id)}
              />
            ))
          ) : (
            <p>Tidak ada catatan di arsip</p>
          )}
        </div>
      </Section>
    </>
  )
}
export default NoteList
