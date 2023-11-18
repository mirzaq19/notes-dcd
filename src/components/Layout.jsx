import Footer from './Footer'
import styles from './Layout.module.scss'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
