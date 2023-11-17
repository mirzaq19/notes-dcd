import styles from './Layout.module.scss'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

export default Layout
