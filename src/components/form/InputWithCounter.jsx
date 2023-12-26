import { forwardRef, useEffect, useState } from 'react'
import Input from '@/components/form/Input'
import PropTypes from 'prop-types'

const InputWithCounter = forwardRef(
  (
    {
      className = '',
      inputClassName = '',
      placeholder = '',
      value,
      setValue,
      maxCounter = 50,
      ...rest
    },
    ref
  ) => {
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
      <div className={className}>
        <div className="text-end mb-1">
          <span>Sisa karakter: {counter}</span>
        </div>
        <Input
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          setValue={onChangeHandler}
          ref={ref}
          {...rest}
        />
      </div>
    )
  }
)

InputWithCounter.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  maxCounter: PropTypes.number,
}

InputWithCounter.displayName = 'InputWithCounter'
export default InputWithCounter
