import styles from '@/styles/TextArea.module.scss'
const TextArea = ({ required, placeholder, value, setValue }) => {
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }
  return (
    <textarea
      className={styles.textarea}
      required={required}
      value={value}
      rows={10}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  )
}

export default TextArea
