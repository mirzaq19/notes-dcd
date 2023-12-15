import clsx from 'clsx'
import PropTypes from 'prop-types'
import UnstyledLink from './UnstyledLink'

const CustomLink = ({ children, className, ...rest }) => {
  return (
    <UnstyledLink
      className={clsx(
        'animated-underline transition-all duration-300',
        'border-dotted border-b-2 border-slate-500 hover:border-transparent',
        className
      )}
      {...rest}
    >
      {children}
    </UnstyledLink>
  )
}

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default CustomLink
