import NoteItem from '@/components/NoteItem'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const NoteList = ({ className, notes, ...rest }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...rest}
    >
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  )
}

NoteList.propTypes = {
  className: PropTypes.string,
  notes: PropTypes.array.isRequired,
}

export default NoteList
