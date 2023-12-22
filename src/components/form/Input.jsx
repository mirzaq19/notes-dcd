import clsx from 'clsx'
import PropTypes from 'prop-types'

const Input = ({ className, type = 'text', value, setValue, ...rest }) => {
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
      {...rest}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Input
