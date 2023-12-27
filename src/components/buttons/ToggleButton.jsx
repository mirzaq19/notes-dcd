import clsx from 'clsx'
import PropTypes from 'prop-types'

const IconContainer = ({ children }) => {
  return (
    <div
      className={clsx(
        'flex justify-center items-center',
        'bg-white dark:bg-dark',
        'text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12'
      )}
    >
      {children}
    </div>
  )
}

IconContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const ToggleButton = ({
  className,
  onClick,
  toggleCallback,
  firstEl,
  secondEl,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'flex group justify-center items-start overflow-hidden',
        'bg-gradient-to-br from-accent-peach to-accent-grape',
        'w-8 h-8 md:w-12 md:h-12',
        'border border-secondary hover:border-accent-peach hover:text-accent-peach rounded-md',
        'transition-colors duration-300 ease-in-out',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      <div
        className={clsx(
          'transition-transform duration-300 ease-in-out',
          toggleCallback()
            ? '-translate-y-8 md:-translate-y-12'
            : 'translate-x-0'
        )}
      >
        <IconContainer>{firstEl}</IconContainer>
        <IconContainer>{secondEl}</IconContainer>
      </div>
    </button>
  )
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  toggleCallback: PropTypes.func.isRequired,
  firstEl: PropTypes.node.isRequired,
  secondEl: PropTypes.node.isRequired,
}

export default ToggleButton
