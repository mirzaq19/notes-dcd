import styles from '@/styles/Section.module.scss'

const Section = ({ title, children, divider = true }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
      {divider && <hr className={styles.divider} />}
    </section>
  )
}

export default Section
