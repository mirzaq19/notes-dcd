import Button from '@/components/buttons/Button'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Error = ({ statusCode, title, desc }) => {
  const navigate = useNavigate()

  const onBackHandler = () => {
    navigate('/')
  }

  return (
    <div className="min-h-main flex flex-col justify-center items-center">
      <div className="text-center px-4">
        <img className="max-w-lg w-full" src="/error.svg" alt="error" />
        <h1 className="mt-8">{statusCode}</h1>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="flex justify-center">
          <Button onClick={onBackHandler} className="mt-4">
            Kembali ke Halaman Utama
          </Button>
        </div>
      </div>
    </div>
  )
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Error
