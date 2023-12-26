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
import { useState } from 'react'
import { navbar as navbarLocale } from '@/utilities/locale-data'
import useLocale from '@/contexts/locale'

const Navbar = ({ className, ...rest }) => {
  const { pathname } = useLocation()
  const { authState, authDispatch } = useAuth()
  const [collapsed, setCollapsed] = useState(true)
  const { locale } = useLocale()

  const logout = () => {
    setCollapsed(true)
    authDispatch({ type: 'LOGOUT' })
    removeAccessToken()
    toast.success('Logout successfully')
  }

  const links = [
    { href: '/', label: navbarLocale[locale].notes },
    { href: '/add', label: navbarLocale[locale].add },
    { href: '/archives', label: navbarLocale[locale].archives },
  ]

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
          {!authState.authenticated && <h1>NotesApp</h1>}
          {authState.authenticated && (
            <ul className="flex gap-1 text-xs font-medium md:text-base">
              {links.map(({ href, label }) => (
                <li
                  key={href}
                  className={clsx(
                    'transition duration-300 ease-in-out rounded-md hover:bg-secondary/40 hover:shadow dark:hover:bg-zinc-700',
                    pathname === href &&
                      'bg-secondary/40 shadow dark:bg-zinc-700'
                  )}
                >
                  <UnstyledLink
                    className="inline-block py-2 px-2 md:px-3"
                    href={href}
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="flex gap-1 md:gap-2 items-center">
          <ThemeButton />
          <LocaleButton />
          {authState.authenticated ? (
            authState.loading ? (
              <div className="ml-3 animate-pulse h-6 w-16 bg-zinc-700 rounded-lg"></div>
            ) : (
              <div className="flex items-center space-x-3 md:space-x-0">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setCollapsed((prev) => !prev)}
                >
                  <img
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                    src={`https://ui-avatars.com/api/?name=${authState.user.name}&background=random&size=128`}
                    alt="user photo"
                  />
                </button>
                <div
                  className={clsx(
                    'absolute -translate-x-[90%] md:-translate-x-3/4 translate-y-24 z-50 my-4 text-base list-none',
                    'bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark dark:divide-gray-600 dark:shadow-pink-500/25',
                    'transition duration-300 ease-in-out transform origin-top-right',
                    collapsed ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  )}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {authState.user.name}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {authState.user.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <button
                        onClick={logout}
                        className="block w-full text-start px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:hover:bg-gray-700/40 dark:text-red-500 transition-colors duration-300 ease-in-out"
                      >
                        {navbarLocale[locale].logout}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )
          ) : (
            ''
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

export default Navbar
