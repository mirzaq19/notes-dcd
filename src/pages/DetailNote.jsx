import { showFormattedDate } from '@/utilities/data'
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from '@/utilities/network-data'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Button from '@/components/buttons/Button'
import { RiInboxArchiveFill, RiInboxUnarchiveFill } from 'react-icons/ri'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ErrorPage from '@/pages/Error'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import NoteDetailSkeleton from '@/components/skeleton/NoteDetailSkeleton'

const DetailNote = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { error, data } = await getNote(id)
        if (error) throw new Error('Failed to fetch note')
        setNote({
          ...data,
          body: parse(data.body),
        })
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchNote()
  }, [id])

  const onArchiveHandler = async () => {
    toast.promise(
      archiveNote(id).then(({ error }) => {
        if (error) throw new Error('Archive note failed')
      }),
      {
        loading: 'Archiving note...',
        success: 'Note archived',
        error: (err) => err.message,
      }
    )

    navigate('/')
  }

  const onUnarchiveHandler = () => {
    toast.promise(
      unarchiveNote(id).then(({ error }) => {
        if (error) throw new Error('Archive note failed')
      }),
      {
        loading: 'Unarchiving note...',
        success: 'Note unarchived',
        error: (err) => err.message,
      }
    )

    navigate('/archives')
  }

  const onDeleteHandler = () => {
    toast.promise(
      deleteNote(id).then(({ error }) => {
        if (error) throw new Error('Delete note failed')
      }),
      {
        loading: 'Deleting note...',
        success: 'Note deleted',
        error: (err) => err.message,
      }
    )

    if (note.archived) navigate('/archives')
    else navigate('/')
  }

  if (!note && !loading) {
    return (
      <ErrorPage
        statusCode={404}
        title="Not Found"
        desc="Wah, halaman yang kamu cari ga ditemuin"
      />
    )
  }

  return (
    <div className="min-h-main my-10">
      {!loading ? (
        <>
          <h1>{note.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs my-1 tracking-wider md:text-sm">
            {showFormattedDate(note.createdAt)}
          </p>
          <p>{note.body}</p>
          <div className="flex justify-end">
            <div className="mt-6 flex gap-2 max-w-lg">
              {note.archived ? (
                <Button onClick={onUnarchiveHandler}>
                  <RiInboxUnarchiveFill className="text-lg" /> Keluarkan dari
                  Arsip
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
        </>
      ) : (
        <NoteDetailSkeleton />
      )}
    </div>
  )
}
export default DetailNote
