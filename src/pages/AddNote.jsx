import Section from '@/components/layout/Section'
import Button from '@/components/buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import InputWithCounter from '@/components/form/InputWithCounter'
import { useState } from 'react'
import EditableDiv from '@/components/form/EditableDiv'
import { addNote } from '@/utilities/data'
import { useNavigate } from 'react-router-dom'

const AddNote = () => {
  const navigate = useNavigate()
  const [note, setNote] = useState({
    title: '',
    body: '',
  })

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

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onTitleChangeHandler('')
    onBodyChangeHandler('')
    addNote(note)
    navigate('/')
  }
  return (
    <div className="min-h-main">
      <Section title="Buat Catatan">
        <form onSubmit={onSubmitHandler}>
          <InputWithCounter
            placeholder="Tuliskan judul catatan"
            maxCounter={50}
            value={note.title}
            setValue={onTitleChangeHandler}
          />
          <EditableDiv
            placeholder="Tuliskan isi catatan"
            setValue={onBodyChangeHandler}
          />

          <Button className="w-full">
            <FontAwesomeIcon icon={faCirclePlus} />
            Buat
          </Button>
        </form>
      </Section>
    </div>
  )
}
export default AddNote
