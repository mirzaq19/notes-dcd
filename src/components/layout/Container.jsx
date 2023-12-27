import clsx from 'clsx'
import PropTypes from 'prop-types'

const Container = ({ className, children, ...rest }) => {
  return (
    <div
      className={clsx('w-full lg:max-w-5xl mx-auto px-4', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Container
