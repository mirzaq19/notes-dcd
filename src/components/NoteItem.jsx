import { showFormattedDate } from '@/utilities/data'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import CustomLink from '@/components/links/CustomLink'
import parse from 'html-react-parser'

const NoteItem = ({ className, id, title, body, createdAt, ...rest }) => {
  return (
    <div
      className={clsx(
        'card gap-2 p-4',
        'border border-secondary rounded-md shadow-sm',
        className
      )}
      {...rest}
    >
      <div className="text-center">
        <h3 className="line-clamp-1 text-ellipsis">
          <CustomLink href={`/notes/${id}`}>{title}</CustomLink>
        </h3>
        <p className="text-gray-600">{showFormattedDate(createdAt)}</p>
      </div>
      <hr className="border-0 border-b border-secondary" />
      <p className="line-clamp-6 text-ellipsis">{parse(body)}</p>
    </div>
  )
}

NoteItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItem
