import NoteItem from '@/components/NoteItem'
import Section from '@/components/Section'
import styles from '@/styles/NoteList.module.scss'

const NoteList = ({ notes, onArchive, onDelete }) => {
  const activeNotes = notes.filter((note) => !note.archived)
  const archivedNotes = notes.filter((note) => note.archived)
  return (
    <>
      <Section title="Catatan Aktif">
        {activeNotes.length > 0 ? (
          <div className={styles.cards}>
            {activeNotes.map((note) => (
              <NoteItem
                key={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                createdAt={note.createdAt}
                onArchive={() => onArchive(note.id)}
                onDelete={() => onDelete(note.id)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.cards_empty}>
            <p>Tidak ada catatan aktif</p>
          </div>
        )}
      </Section>
      <Section title="Arsip">
        {archivedNotes.length > 0 ? (
          <div className={styles.cards}>
            {archivedNotes.map((note) => (
              <NoteItem
                key={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                createdAt={note.createdAt}
                onArchive={() => onArchive(note.id)}
                onDelete={() => onDelete(note.id)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.cards_empty}>
            <p>Tidak ada catatan di arsip</p>
          </div>
        )}
      </Section>
    </>
  )
}
export default NoteList
