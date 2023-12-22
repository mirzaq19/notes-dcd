import Button from '@/components/buttons/Button'
import Input from '@/components/form/Input'
import CustomLink from '@/components/links/CustomLink'
import { register } from '@/utilities/network-data'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [registering, setRegistering] = useState(false)

  const registerHandler = async (data) => {
    setRegistering(true)
    const { error } = await register(data)
    return { error }
  }

  const onRegisterSubmitHandler = async (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      password,
    }

    toast.promise(
      registerHandler(data)
        .then(({ error }) => {
          if (error) throw new Error('Registration failed')
          navigate('/login')
        })
        .finally(() => setRegistering(false)),
      {
        loading: 'Loading',
        success: 'Registration successfully',
        error: (err) =>
          err.message ?? 'Something went wrong, please try again later!',
      }
    )
  }

  return (
    <div className="min-h-main">
      <div className="my-8">
        <div className="text-center mb-6">
          <h1 className="mb-1">Register</h1>
          <p className="tracking-wider">Register to use the app, please</p>
        </div>
        <div className="flex justify-center">
          <form className="max-w-xl" onSubmit={onRegisterSubmitHandler}>
            <label className="inline-block mb-2" htmlFor="nama">
              Nama
            </label>
            <Input
              id="nama"
              className="mb-3"
              placeholder="nama"
              value={name}
              setValue={setName}
              required
            />
            <label className="inline-block mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              className="mb-3"
              placeholder="email"
              type="email"
              value={email}
              setValue={setEmail}
              required
            />
            <label className="inline-block mb-2" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              className="mb-3"
              placeholder="******"
              type="password"
              value={password}
              setValue={setPassword}
              required
            />
            <label className="inline-block mb-2" htmlFor="passwordConfirm">
              Password Confirmation
            </label>
            <Input
              id="passwordConfirm"
              placeholder="******"
              type="password"
              value={passwordConfirm}
              setValue={setPasswordConfirm}
              required
            />
            <p className="my-4">
              have an account?{' '}
              <CustomLink className="pb-1 dark:text-zinc-300" href="/login">
                Login
              </CustomLink>
            </p>
            <Button className="w-full md:w-a" disabled={registering}>
              {registering ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                ''
              )}
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
