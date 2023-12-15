import PropTypes from 'prop-types'
import Container from '@/components/layout/Container'
import clsx from 'clsx'
import UnstyledLink from '@/components/links/UnstyledLink'

const Navbar = ({ className, ...rest }) => {
  return (
    <header
      className={clsx(
        'bg-white text-dark dark:bg-dark dark:text-light',
        'sticky top-0 z-[1]',
        className
      )}
      {...rest}
    >
      <Container className="flex justify-between">
        <nav className="flex justify-between items-center gap-2 py-4 lg:gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            <UnstyledLink href="/">NotesApp</UnstyledLink>
          </h1>
          <ul className="flex gap-1 text-xs font-medium md:text-base">
            <li className="transition duration-300 ease-in-out rounded-md hover:bg-secondary/40">
              <UnstyledLink className="inline-block p-2" href="/add">
                Add
              </UnstyledLink>
            </li>
            <li className="transition duration-300 ease-in-out rounded-md hover:bg-secondary/40">
              <UnstyledLink className="inline-block p-2" href="/archives">
                Archives
              </UnstyledLink>
            </li>
          </ul>
        </nav>
      </Container>
      <div className="h-[6px] shadow-md bg-gradient-to-r from-accent-peach to-accent-grape"></div>
    </header>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}

export default Navbar
