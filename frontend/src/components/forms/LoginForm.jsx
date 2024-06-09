import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Input } from '@nextui-org/react'


function LoginForm () {
  const [formData, setFormData] = useState({
    email: 'test@tattoola.fr',
    password: 'password'
  })
  const navigate = useNavigate()

  const { state: { user, jwt, error }, login, loading } = useAuth()

  const inputClasses = {
    input: [
      "bg-zinc-50",
      "text-zinc-900",
      "placeholder:text-zinc-400",
    ],
    inputWrapper : [
      "border-zinc-900"
    ]
  }

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <form className='flex flex-col justify-center w-1/2 gap-10'>
        <h1 className='text-zinc-900 font-bold text-4xl pt-16'>Connectez-vous</h1>
        <Input
          name='email'
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          variant='bordered'
          classNames={inputClasses}
          required
        />
        <Input
          name='password'
          type='password'
          placeholder='Mot de passe'
          value={formData.password}
          onChange={handleChange}
          variant='bordered'
          classNames={inputClasses}
          required
        />
        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
        <div className='flex flex-row justify-start '>
          <Checkbox color='default' radius="sm">Rester connecté</Checkbox>
        </div>
        
        <div className='flex flex-row justify-center'>
          <Button
            variant="ghost"
            isLoading={loading}
            type='submit'
            onClick={handleSubmit}
            className='border-zinc-900 text-zinc-900 bg-zinc-50 px-24'>
            S'inscrire
          </Button>
        </div>
        <a className='text-zinc-900 underline'>Mot de passe oublié ?</a>
      </form>
    </>
  )
}

export default LoginForm
