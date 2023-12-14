import { useState } from 'react'
import InputWithCounter from '@/components/InputWithCounter'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextArea from '@/components/TextArea'
import Section from '@/components/Section'
import Button from '@/components/Button'

const NotesForm = ({ onAddNote }) => {
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
    onAddNote(note)
    onTitleChangeHandler('')
    onBodyChangeHandler('')
  }

  return (
    <Section title="Buat Catatan">
      <form onSubmit={onSubmitHandler}>
        <InputWithCounter
          required={true}
          placeholder="Tuliskan judul catatan"
          maxCounter={50}
          value={note.title}
          setValue={onTitleChangeHandler}
        />

        <TextArea
          required={true}
          placeholder="Tuliskan isi catatan"
          value={note.body}
          setValue={onBodyChangeHandler}
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
