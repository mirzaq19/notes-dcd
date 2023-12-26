import PropTypes from 'prop-types'
import Container from '@/components/layout/Container'
import clsx from 'clsx'
import UnstyledLink from '@/components/links/UnstyledLink'
import ThemeButton from '@/components/buttons/ThemeButton'
import { useLocation } from 'react-router-dom'
import useAuth from '@/contexts/auth'
import { removeAccessToken } from '@/utilities/network-data'
import toast from 'react-hot-toast'
import LocaleButton from '@/components/buttons/LocaleButton'

const Navbar = ({ className, ...rest }) => {
  const { pathname } = useLocation()
  const { authState, authDispatch } = useAuth()

  const logout = () => {
    authDispatch({ type: 'LOGOUT' })
    removeAccessToken()
    toast.success('Logout successfully')
  }

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
            {authState.authenticated ? (
              <UnstyledLink href="/">NotesApp</UnstyledLink>
            ) : (
              'NotesApp'
            )}
          </h1>
          {authState.authenticated && (
            <ul className="flex gap-1 text-sm font-medium md:text-base">
              {links.map(({ href, label }) => (
                <li
                  key={href}
                  className={clsx(
                    'transition duration-300 ease-in-out rounded-md hover:bg-secondary/40 hover:shadow dark:hover:bg-zinc-700',
                    pathname === href &&
                      'bg-secondary/40 shadow dark:bg-zinc-700'
                  )}
                >
                  <UnstyledLink className="inline-block py-2 px-3" href={href}>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="flex gap-1 items-center">
          <ThemeButton />
          <LocaleButton />
          {authState.authenticated ? (
            authState.loading ? (
              <div className="ml-3 animate-pulse h-6 w-16 bg-zinc-700 rounded-lg"></div>
            ) : (
              <p className="ml-3">{authState.user.name}</p>
            )
          ) : (
            ''
          )}
          {authState.authenticated && (
            <button
              className="ml-3 text-sm font-medium text-red-500 dark:text-red-400"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
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
