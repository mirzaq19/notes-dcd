import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UnstyledLink = ({ children, href, openNewTab, className, ...rest }) => {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#')

  if (!isNewTab) {
    return (
      <Link to={href} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={className}
    >
      {children}
    </a>
  )
}

UnstyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  openNewTab: PropTypes.bool,
  className: PropTypes.string,
}

export default UnstyledLink
