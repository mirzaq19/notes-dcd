import PropTypes from 'prop-types'
import clsx from 'clsx'
import { forwardRef } from 'react'

const EditableDiv = forwardRef(
  ({ className = '', placeholder, setValue, ...rest }, ref) => {
    const onInputChangeHandler = (e) => {
      const value = e.target.innerHTML
      setValue(value)
    }

    return (
      <div
        className={clsx(
          'bg-light/25 dark:bg-zinc-800',
          'empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400',
          'w-full min-h-[12rem] p-3 rounded-md outline-none transition duration-300 shadow-sm',
          'border border-secondary focus:border-accent-peach focus:ring-1 focus:ring-accent-peach',
          className
        )}
        data-placeholder={placeholder}
        contentEditable
        onInput={onInputChangeHandler}
        ref={ref}
        {...rest}
      ></div>
    )
  }
)

EditableDiv.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.func.isRequired,
}

EditableDiv.displayName = 'EditableDiv'
export default EditableDiv
