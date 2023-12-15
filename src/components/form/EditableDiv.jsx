import PropTypes from 'prop-types'
import clsx from 'clsx'

const EditableDiv = ({ className = '', placeholder, setValue, ...rest }) => {
  const onInputChangeHandler = (e) => {
    const value = e.target.innerHTML
    setValue(value)
  }

  return (
    <div
      className={clsx(
        'empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400',
        'w-full min-h-[12rem] mb-4 p-3 rounded-md outline-none transition duration-300 shadow-sm',
        'border border-secondary focus:border-accent-peach focus:ring-1 focus:ring-accent-peach',
        className
      )}
      data-placeholder={placeholder}
      contentEditable
      onInput={onInputChangeHandler}
      {...rest}
    ></div>
  )
}

EditableDiv.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.func.isRequired,
}

export default EditableDiv
