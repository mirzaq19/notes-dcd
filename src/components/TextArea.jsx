import styles from './TextArea.module.scss'
const TextArea = ({ required, placeholder, value, setValue }) => {
  const onChangeInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <textarea
      className={styles.textarea}
      required={required}
      value={value}
      rows={10}
      onChange={onChangeInput}
      placeholder={placeholder}
    />
  )
}

export default TextArea
