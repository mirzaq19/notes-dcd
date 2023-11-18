import { useState } from 'react'
import styles from './Input.module.scss'

const Input = ({ required, placeholder, value, setValue, maxCounter = 50 }) => {
  const [counter, setCounter] = useState(maxCounter)

  const onChangeHandler = (e) => {
    const value = e.target.value

    if (value.length <= maxCounter) {
      setCounter(maxCounter - value.length)
      setValue(value)
    }
  }

  return (
    <>
      <div className={styles.counter}>
        <span>Sisa karakter: {counter}</span>
      </div>
      <input
        required={required}
        onChange={onChangeHandler}
        value={value}
        className={styles.input}
        type="text"
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
