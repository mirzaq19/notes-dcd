import styles from './Input.module.scss'

const Input = ({ required, placeholder, value, setValue }) => {
  const onInputChange = (e) => {
    const value = e.target.value
    setValue(value)
  }

  return (
    <input
      className={styles.input}
      required={required}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
    />
  )
}

export default Input
