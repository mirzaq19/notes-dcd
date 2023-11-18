import styles from './Navbar.module.scss'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>NotesApp</h1>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
