import {
  showFormattedDate,
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from '@/utilities/data'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Button from '@/components/buttons/Button'
import { RiInboxArchiveFill, RiInboxUnarchiveFill } from 'react-icons/ri'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const DetailNote = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const note = getNote(id)

  const onArchiveHandler = () => {
    archiveNote(id)
    navigate('/')
  }

  const onUnarchiveHandler = () => {
    unarchiveNote(id)
    navigate('/archives')
  }

  const onDeleteHandler = () => {
    deleteNote(id)
    navigate('/')
  }

  return (
    <div className="min-h-main my-10">
      <h1>{note.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-xs my-1 tracking-wider md:text-sm">
        {showFormattedDate(note.createdAt)}
      </p>
      <p>{parse(note.body)}</p>
      <div className="flex justify-end">
        <div className="mt-6 flex gap-2 max-w-lg">
          {note.archived ? (
            <Button onClick={onUnarchiveHandler}>
              <RiInboxUnarchiveFill className="text-lg" /> Keluarkan dari Arsip
            </Button>
          ) : (
            <Button onClick={onArchiveHandler}>
              <RiInboxArchiveFill className="text-lg" /> Arsipkan
            </Button>
          )}
          <Button onClick={onDeleteHandler}>
            <FaTrashAlt className="text-lg" /> Hapus
          </Button>
        </div>
      </div>
    </div>
  )
}
export default DetailNote
