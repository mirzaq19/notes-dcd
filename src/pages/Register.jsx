import Button from '@/components/buttons/Button'
import Input from '@/components/form/Input'
import CustomLink from '@/components/links/CustomLink'
import { register } from '@/utilities/network-data'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useRef, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { register as registerLocale } from '@/utilities/locale-data'
import useLocale from '@/contexts/locale'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const passwordConfirmRef = useRef('')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [registering, setRegistering] = useState(false)
  const { locale } = useLocale()

  const registerHandler = async (data) => {
    setRegistering(true)
    const { error } = await register(data)
    return { error }
  }

  const onRegisterSubmitHandler = async (e) => {
    e.preventDefault()

    if (!nameValidationHandler()) {
      nameRef.current.focus()
      return
    }
    if (!emailValidationHandler()) {
      emailRef.current.focus()
      return
    }
    if (!passwordValidationHandler()) {
      passwordRef.current.focus()
      return
    }

    if (!passwordConfirmValidationHandler()) {
      passwordConfirmRef.current.focus()
      return
    }

    const data = {
      name,
      email,
      password,
    }

    toast.promise(
      registerHandler(data)
        .then(({ error }) => {
          if (error) throw new Error(registerLocale[locale].registering.error)
          navigate('/login')
        })
        .finally(() => setRegistering(false)),
      {
        loading: registerLocale[locale].registering.loading,
        success: registerLocale[locale].registering.success,
        error: (err) =>
          err.message ?? 'Something went wrong, please try again later!',
      }
    )
  }

  const nameValidationHandler = () => {
    if (!name) {
      setErrors((prev) => ({
        ...prev,
        name: registerLocale[locale].validation.name.required,
      }))
      return false
    }
    setErrors((prev) => ({
      ...prev,
      name: '',
    }))
    return true
  }

  const emailValidationHandler = () => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: registerLocale[locale].validation.email.required,
      }))
      return false
    }
    if (email !== '' && !email.includes('@')) {
      setErrors((prev) => ({
        ...prev,
        email: registerLocale[locale].validation.email.invalid,
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
    if (!password) {
      setErrors((prev) => ({
        ...prev,
        password: registerLocale[locale].validation.password.required,
      }))
      return false
    }
    setErrors((prev) => ({
      ...prev,
      password: '',
    }))
    return true
  }

  const passwordConfirmValidationHandler = () => {
    if (!passwordConfirm) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm:
          registerLocale[locale].validation.password_confirmation.required,
      }))
      return false
    }
    if (passwordConfirm !== password) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm:
          registerLocale[locale].validation.password_confirmation.same,
      }))
      return false
    }
    setErrors((prev) => ({
      ...prev,
      passwordConfirm: '',
    }))
    return true
  }

  return (
    <div className="min-h-main">
      <div className="my-8">
        <div className="text-center mb-6">
          <h1 className="mb-1">{registerLocale[locale].title}</h1>
          <p className="tracking-wider">{registerLocale[locale].subtitle}</p>
        </div>
        <div className="flex justify-center">
          <form className="max-w-xl w-full" onSubmit={onRegisterSubmitHandler}>
            <label className="inline-block mb-2" htmlFor="name">
              {registerLocale[locale].name}
            </label>
            <Input
              id="name"
              className={
                errors.name ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder={registerLocale[locale].name.toLowerCase()}
              value={name}
              setValue={setName}
              ref={nameRef}
              onBlur={nameValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.name}
            </p>
            <label className="inline-block mb-2" htmlFor="email">
              {registerLocale[locale].email}
            </label>
            <Input
              id="email"
              className={
                errors.email ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder={registerLocale[locale].email.toLowerCase()}
              type="email"
              value={email}
              setValue={setEmail}
              ref={emailRef}
              onBlur={emailValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
            <label className="inline-block mb-2" htmlFor="password">
              {registerLocale[locale].password}
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
              ref={passwordRef}
              onBlur={passwordValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.password}
            </p>
            <label className="inline-block mb-2" htmlFor="passwordConfirm">
              {registerLocale[locale].password_confirmation}
            </label>
            <Input
              id="passwordConfirm"
              className={
                errors.passwordConfirm
                  ? 'border-red-600 dark:border-red-400'
                  : ''
              }
              placeholder="******"
              type="password"
              value={passwordConfirm}
              setValue={setPasswordConfirm}
              ref={passwordConfirmRef}
              onBlur={passwordConfirmValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.passwordConfirm}
            </p>
            <p className="my-4">
              {registerLocale[locale].login_prefix}{' '}
              <CustomLink className="pb-1 dark:text-zinc-300" href="/login">
                {registerLocale[locale].login}
              </CustomLink>
            </p>
            <Button className="w-full md:w-a" disabled={registering}>
              {registering ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                ''
              )}
              {registerLocale[locale].register}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
