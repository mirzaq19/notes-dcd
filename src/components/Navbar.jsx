import styles from '@/styles/Navbar.module.scss'
import ThemeToggle from '@/components/ThemeToggle'

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
