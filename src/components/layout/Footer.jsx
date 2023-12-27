import { FaHeart, FaLinkedin, FaGithub } from 'react-icons/fa'
import {} from 'react-icons/fa'
import clsx from 'clsx'
import UnstyledLink from '../links/UnstyledLink'
import CustomLink from '../links/CustomLink'
import PropTypes from 'prop-types'

const Footer = ({ className, ...rest }) => {
  return (
    <footer
      className={clsx(
        'flex justify-between border-t-2 border-t-secondary/40 py-6',
        className
      )}
      {...rest}
    >
      <div className="flex gap-1 items-center">
        <span>
          &copy;<span className="font-medium">NotesApp 2023</span> | Made with
        </span>
        <FaHeart className="text-accent-peach" />
        <CustomLink
          className="animated-underline hover:text-accent-peach"
          href="https://github.com/mirzaq19"
        >
          Mirzaq
        </CustomLink>
      </div>
      <div className="flex gap-1 text-2xl">
        {socials.map((social) => (
          <UnstyledLink
            className="transition-colors duration-300 ease-in-out hover:text-accent-peach"
            key={social.href}
            href="https://github.com/mirzaq19"
          >
            {social.icon}
          </UnstyledLink>
        ))}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

const socials = [
  { href: 'https://linkedin.com/in/mirzaq', icon: <FaLinkedin /> },
  { href: 'https://github.com/mirzaq19', icon: <FaGithub /> },
]

export default Footer
