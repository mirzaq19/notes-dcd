import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { login, putAccessToken } from '@/utilities/network-data'
import Button from '@/components/buttons/Button'
import Input from '@/components/form/Input'
import CustomLink from '@/components/links/CustomLink'
import useLogin from '@/hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [logginIn, setLogginIn] = useState(false)
  const [password, setPassword] = useState('')
  const { loginDispatch } = useLogin()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const loginHandler = async () => {
    const { error, data } = await login({
      email,
      password,
    })
    if (error) throw new Error('Login failed')

    putAccessToken(data.accessToken)
    await loginDispatch({
      sucessAction: () => navigate('/'),
      errorAction: (err) => console.log(err.message),
    })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!emailValidationHandler()) {
      emailRef.current.focus()
      return
    }
    if (!passwordValidationHandler()) {
      passwordRef.current.focus()
      return
    }
    setLogginIn(true)

    toast.promise(
      loginHandler().finally(() => {
        setLogginIn(false)
      }),
      {
        loading: 'Loading',
        success: 'Login successfully',
        error: (err) =>
          err.message ?? 'Something went wrong, please try again later!',
      }
    )
  }

  const emailValidationHandler = () => {
    if (email === '') {
      setErrors((prev) => ({
        ...prev,
        email: 'Email is required',
      }))
      return false
    }
    if (email !== '' && !email.includes('@')) {
      setErrors((prev) => ({
        ...prev,
        email: 'Email is invalid',
      }))
      return false
    }

    setErrors((prev) => ({
      ...prev,
      email: '',
    }))
    return true
  }

  const passwordValidationHandler = () => {
    if (password === '') {
      setErrors((prev) => ({
        ...prev,
        password: 'Password is required',
      }))
      return false
    }

    setErrors((prev) => ({
      ...prev,
      password: '',
    }))
    return true
  }

  return (
    <div className="min-h-main">
      <div className="my-8">
        <div className="text-center mb-6">
          <h1 className="mb-1">Login</h1>
          <p className="tracking-wider">Login to use the app, please</p>
        </div>
        <div className="flex justify-center">
          <form className="max-w-xl w-full" onSubmit={onSubmitHandler}>
            <label className="inline-block mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              className={
                errors.email ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder="email"
              type="email"
              value={email}
              setValue={setEmail}
              onBlur={emailValidationHandler}
              ref={emailRef}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
            <label className="inline-block mb-2" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              className={
                errors.password ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder="******"
              type="password"
              value={password}
              setValue={setPassword}
              onBlur={passwordValidationHandler}
              ref={passwordRef}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.password}
            </p>

            <p className="my-4">
              don&apos;t have an account?{' '}
              <CustomLink className="pb-1 dark:text-zinc-300" href="/register">
                register
              </CustomLink>
            </p>
            <Button className="w-full md:w-a" disabled={logginIn}>
              {logginIn ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                ''
              )}
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
