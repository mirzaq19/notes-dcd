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
import {
  detailNote as detailNoteLocale,
  notFound as notFounLocale,
} from '@/utilities/locale-data'
import useLocale from '@/contexts/locale'

const DetailNote = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const { locale } = useLocale()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { error, data } = await getNote(id)
        if (error) throw new Error(detailNoteLocale[locale].error_fetching)
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
  }, [id, locale])

  const onArchiveHandler = async () => {
    toast.promise(
      archiveNote(id).then(({ error }) => {
        if (error) throw new Error(detailNoteLocale[locale].archiving.error)
      }),
      {
        loading: detailNoteLocale[locale].archiving.loading,
        success: detailNoteLocale[locale].archiving.success,
        error: (err) => err.message,
      }
    )

    navigate('/')
  }

  const onUnarchiveHandler = () => {
    toast.promise(
      unarchiveNote(id).then(({ error }) => {
        if (error) throw new Error(detailNoteLocale[locale].unarchiving.error)
      }),
      {
        loading: detailNoteLocale[locale].unarchiving.loading,
        success: detailNoteLocale[locale].unarchiving.success,
        error: (err) => err.message,
      }
    )

    navigate('/archives')
  }

  const onDeleteHandler = () => {
    toast.promise(
      deleteNote(id).then(({ error }) => {
        if (error) throw new Error(detailNoteLocale[locale].deleting.error)
      }),
      {
        loading: detailNoteLocale[locale].deleting.loading,
        success: detailNoteLocale[locale].deleting.success,
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
        title={notFounLocale[locale].title}
        desc={notFounLocale[locale].subtitle}
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
          <div>{note.body}</div>
          <div className="flex justify-end">
            <div className="mt-6 flex gap-2 max-w-lg">
              {note.archived ? (
                <Button onClick={onUnarchiveHandler}>
                  <RiInboxUnarchiveFill className="text-lg" />{' '}
                  {detailNoteLocale[locale].unarchive}
                </Button>
              ) : (
                <Button onClick={onArchiveHandler}>
                  <RiInboxArchiveFill className="text-lg" />{' '}
                  {detailNoteLocale[locale].archive}
                </Button>
              )}
              <Button onClick={onDeleteHandler}>
                <FaTrashAlt className="text-lg" />{' '}
                {detailNoteLocale[locale].delete}
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
