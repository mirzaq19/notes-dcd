import clsx from 'clsx'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const Input = forwardRef(
  ({ className, type = 'text', value, setValue, ...rest }, ref) => {
    const onChangeHandler = (e) => {
      const value = e.target.value
      setValue(value)
    }

    return (
      <input
        className={clsx(
          'w-full p-3 rounded-md outline-none transition duration-300 shadow-sm',
          'border border-secondary focus:border-accent-peach focus:ring-1 focus:ring-accent-peach',
          'bg-light/25 dark:bg-zinc-800',
          className
        )}
        type={type}
        value={value}
        onChange={onChangeHandler}
        ref={ref}
        {...rest}
      />
    )
  }
)

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

Input.displayName = 'Input'
export default Input
