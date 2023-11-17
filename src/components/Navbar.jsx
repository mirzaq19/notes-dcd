import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>NotesApp</h1>
      </div>
    </header>
  )
}

export default Navbar
