import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 px-4 py-2 rounded-md',
        'bg-gradient-to-r from-accent-peach to-accent-grape text-white',
        'transition duration-300 ease-in-out',
        'hover:shadow-accent active:scale-[0.96]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default Button
