import { useEffect, useState } from 'react'
import Input from '@/components/form/Input'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const InputWithCounter = ({
  className = '',
  placeholder = '',
  value,
  setValue,
  maxCounter = 50,
  ...rest
}) => {
  const [counter, setCounter] = useState(maxCounter)

  const onChangeHandler = (value) => {
    if (value.length <= maxCounter) {
      setCounter(maxCounter - value.length)
      setValue(value)
    }
  }

  useEffect(() => {
    setCounter(maxCounter - value.length)
  }, [maxCounter, value])

  return (
    <div className={clsx('mb-4', className)} {...rest}>
      <div className="text-end mb-1">
        <span>Sisa karakter: {counter}</span>
      </div>
      <Input
        placeholder={placeholder}
        value={value}
        setValue={onChangeHandler}
      />
    </div>
  )
}

InputWithCounter.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  maxCounter: PropTypes.number,
}

export default InputWithCounter
