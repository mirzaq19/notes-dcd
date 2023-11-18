import styles from './Button.module.scss'
const Button = (props) => {
  const full = props.full ? styles.fullbutton : ''

  return (
    <button {...props} className={`${styles.button} ${full}`}>
      {props.children}
    </button>
  )
}
export default Button
