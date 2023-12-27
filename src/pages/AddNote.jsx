import Section from '@/components/layout/Section'
import Button from '@/components/buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import InputWithCounter from '@/components/form/InputWithCounter'
import { useRef, useState } from 'react'
import EditableDiv from '@/components/form/EditableDiv'
import { addNote } from '@/utilities/network-data'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { addNote as addNoteLocale } from '@/utilities/locale-data'
import useLocale from '@/contexts/locale'

const AddNote = () => {
  const maxTitleLength = 50
  const navigate = useNavigate()
  const [note, setNote] = useState({
    title: '',
    body: '',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    title: '',
    body: '',
  })
  const titleRef = useRef('')
  const bodyRef = useRef('')
  const { locale } = useLocale()

  const onTitleChangeHandler = (value) => {
    setNote((prevState) => ({
      ...prevState,
      title: value,
    }))
  }

  const onBodyChangeHandler = (value) => {
    setNote((prevState) => ({
      ...prevState,
      body: value,
    }))
  }

  const titleValidationHandler = () => {
    const value = note.title
    if (value.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        title: addNoteLocale[locale].validation.title.required,
      }))

      return false
    }

    if (value.length > maxTitleLength) {
      setErrors((prevState) => ({
        ...prevState,
        title: addNoteLocale[locale].validation.title.long,
      }))

      return false
    }

    setErrors((prevState) => ({
      ...prevState,
      title: '',
    }))
    return true
  }

  const bodyValidationHandler = () => {
    const value = note.body
    if (value.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        body: addNoteLocale[locale].validation.content.required,
      }))

      return false
    }

    setErrors((prevState) => ({
      ...prevState,
      body: '',
    }))
    return true
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!titleValidationHandler()) {
      titleRef.current.focus()
      return
    }
    if (!bodyValidationHandler()) {
      bodyRef.current.focus()
      return
    }

    setLoading(true)
    toast.promise(
      addNote({
        title: note.title,
        body: note.body,
      }).then(({ error }) => {
        if (error) throw new Error(addNoteLocale[locale].adding.error)
      }),
      {
        loading: addNoteLocale[locale].adding.loading,
        success: addNoteLocale[locale].adding.success,
        error: (err) =>
          err.message ?? 'Something went wrong, please try again later!',
      }
    )

    onTitleChangeHandler('')
    onBodyChangeHandler('')
    setLoading(false)
    navigate('/')
  }
  return (
    <div className="min-h-main">
      <Section title={addNoteLocale[locale].title}>
        <form onSubmit={onSubmitHandler}>
          <InputWithCounter
            className={errors.title ? '' : 'mb-3'}
            inputClassName={
              errors.title ? 'border-red-600 dark:border-red-400' : ''
            }
            placeholder={addNoteLocale[locale].placeholder.title}
            maxCounter={maxTitleLength}
            value={note.title}
            setValue={onTitleChangeHandler}
            ref={titleRef}
            onBlur={titleValidationHandler}
            required
          />
          <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
            {errors.title}
          </p>
          <EditableDiv
            className={
              errors.body ? 'border-red-600 dark:border-red-400' : 'mb-3'
            }
            placeholder={addNoteLocale[locale].placeholder.content}
            setValue={onBodyChangeHandler}
            ref={bodyRef}
            onBlur={bodyValidationHandler}
          />
          <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
            {errors.body}
          </p>

          <Button className="w-full" disabled={loading}>
            <FontAwesomeIcon icon={faCirclePlus} />
            {addNoteLocale[locale].add_button}
          </Button>
        </form>
      </Section>
    </div>
  )
}
export default AddNote
