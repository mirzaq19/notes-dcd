import Footer from '@/components/Footer'
import styles from '@/styles/Layout.module.scss'
import Navbar from '@/components/Navbar'

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
