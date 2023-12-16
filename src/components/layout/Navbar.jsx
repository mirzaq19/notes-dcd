import PropTypes from 'prop-types'
import Container from '@/components/layout/Container'
import clsx from 'clsx'
import UnstyledLink from '@/components/links/UnstyledLink'
import ThemeButton from '@/components/buttons/ThemeButton'
import { useLocation } from 'react-router-dom'

const Navbar = ({ className, ...rest }) => {
  const { pathname } = useLocation()
  return (
    <header
      className={clsx(
        'bg-white text-dark dark:bg-dark dark:text-light',
        'sticky top-0 z-[1]',
        className
      )}
      {...rest}
    >
      <Container className="flex items-center justify-between">
        <nav className="flex justify-between items-center gap-2 py-4 lg:gap-4">
          <h1>
            <UnstyledLink href="/">NotesApp</UnstyledLink>
          </h1>
          <ul className="flex gap-1 text-sm font-medium md:text-base">
            {links.map(({ href, label }) => (
              <li
                key={href}
                className={clsx(
                  'transition duration-300 ease-in-out rounded-md hover:bg-secondary/40 hover:shadow dark:hover:bg-zinc-700',
                  pathname === href && 'bg-secondary/40 shadow dark:bg-zinc-700'
                )}
              >
                <UnstyledLink className="inline-block py-2 px-3" href={href}>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeButton />
      </Container>
      <div className="h-[6px] shadow-md bg-gradient-to-r from-accent-peach to-accent-grape"></div>
    </header>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}

const links = [
  { href: '/add', label: 'Add' },
  { href: '/archives', label: 'Archives' },
]

export default Navbar
