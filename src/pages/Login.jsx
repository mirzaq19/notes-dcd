import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { login, putAccessToken } from '@/utilities/network-data'
import Button from '@/components/buttons/Button'
import Input from '@/components/form/Input'
import CustomLink from '@/components/links/CustomLink'
import useLogin from '@/hooks/useLogin'
import { login as loginLocale } from '@/utilities/locale-data'
import useLocale from '@/contexts/locale'

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
  const { locale } = useLocale()

  const loginHandler = async () => {
    const { error, data } = await login({
      email,
      password,
    })
    if (error) throw new Error(loginLocale[locale].logging_in.error)

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
        loading: loginLocale[locale].logging_in.loading,
        success: loginLocale[locale].logging_in.success,
        error: (err) =>
          err.message ?? 'Something went wrong, please try again later!',
      }
    )
  }

  const emailValidationHandler = () => {
    if (email === '') {
      setErrors((prev) => ({
        ...prev,
        email: loginLocale[locale].validation.email.required,
      }))
      return false
    }
    if (email !== '' && !email.includes('@')) {
      setErrors((prev) => ({
        ...prev,
        email: loginLocale[locale].validation.email.invalid,
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
        password: loginLocale[locale].validation.password.required,
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
          <h1 className="mb-1">{loginLocale[locale].title}</h1>
          <p className="tracking-wider">{loginLocale[locale].subtitle}</p>
        </div>
        <div className="flex justify-center">
          <form className="max-w-xl w-full" onSubmit={onSubmitHandler}>
            <label className="inline-block mb-2" htmlFor="email">
              {loginLocale[locale].email}
            </label>
            <Input
              id="email"
              className={
                errors.email ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder={loginLocale[locale].email.toLowerCase()}
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
              {loginLocale[locale].password}
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
              {loginLocale[locale].register_prefix}{' '}
              <CustomLink className="pb-1 dark:text-zinc-300" href="/register">
                {loginLocale[locale].register}
              </CustomLink>
            </p>
            <Button className="w-full md:w-a" disabled={logginIn}>
              {logginIn ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                ''
              )}
              {loginLocale[locale].login}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
