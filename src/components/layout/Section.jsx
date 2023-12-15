import clsx from 'clsx'
import PropTypes from 'prop-types'

const Section = ({ title, children, className, divider = true, ...rest }) => {
  return (
    <section className={clsx('my-4', className)} {...rest}>
      <h2 className="mb-2">{title}</h2>
      {children}
      {divider && (
        <hr className="mt-6 border-0 border-b-2 border-b-secondary/30" />
      )}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  divider: PropTypes.bool,
}

export default Section
