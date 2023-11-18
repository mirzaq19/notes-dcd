import { useState } from 'react'
import InputWithCounter from './InputWithCounter'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextArea from './TextArea'
import Section from './Section'
import Button from './Button'

const NotesForm = ({ onAddNote }) => {
  const [note, setNote] = useState({
    title: '',
    body: '',
  })

  const onTitleChange = (value) => {
    setNote({
      ...note,
      title: value,
    })
  }

  const onBodyChange = (value) => {
    setNote({
      ...note,
      body: value,
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onAddNote(note)
    setNote({
      title: '',
      body: '',
    })
  }

  return (
    <Section title="Buat Catatan">
      <form onSubmit={onSubmitHandler}>
        <InputWithCounter
          required={true}
          placeholder="Tuliskan judul catatan"
          maxCounter={50}
          value={note.title}
          setValue={onTitleChange}
        />

        <TextArea
          required={true}
          placeholder="Tuliskan isi catatan"
          value={note.body}
          setValue={onBodyChange}
        />
        <Button full={true}>
          <FontAwesomeIcon icon={faCirclePlus} />
          Buat
        </Button>
      </form>
    </Section>
  )
}

export default NotesForm
