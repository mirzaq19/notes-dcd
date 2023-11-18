import Button from './Button'
import styles from './NoteItem.module.scss'
import {
  faArchive,
  faTrashAlt,
  faExchange,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { showFormattedDate } from '../utilities/getData'

const NoteItem = ({
  title,
  body,
  archived,
  createdAt,
  onArchive,
  onDelete,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <h3>{title}</h3>
        <p className={styles.date}>{showFormattedDate(createdAt)}</p>
        <hr className={styles.divider} />
        <p>{body}</p>
      </div>
      <div className={styles.card_button}>
        <Button full={true} onClick={onArchive}>
          {archived ? (
            <>
              <FontAwesomeIcon icon={faExchange} /> Pindahkan
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faArchive} /> Arsipkan
            </>
          )}
        </Button>
        <Button full={true} onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashAlt} /> Hapus
        </Button>
      </div>
    </div>
  )
}

export default NoteItem
