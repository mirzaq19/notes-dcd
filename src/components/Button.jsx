import styles from './Button.module.scss'
const Button = ({ full, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${full ? styles.fullbutton : ''}`}
    >
      {children}
    </button>
  )
}
export default Button
