import { useEffect, useState } from 'react'

import { useAuth } from '../../contexts/authContext'
import { Button, Checkbox, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { validateRegisterForm } from '../../services/formAuthValidation'

function RegisterForm () {

  const navigate = useNavigate()
  const { error, register, loading, state: { user, jwt } } = useAuth()

  const [formData, setFormData] = useState({
    email: 'test@tattoola.fr',
    username: 'Tattoola',
    password: 'password',
    firstname: 'John',
    lastname: 'Doe'
  })

  const [errors, setErrors] = useState({
    email: null,
    username: null,
    password: null,
    firstname: null,
    lastname: null
  })

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

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault()
    const _errors = validateRegisterForm(formData)
    if (_errors) {
      setErrors(_errors)
    }
    register(formData)
    console.log('user :>> ', user);
  }

  return (
    <form className='flex flex-col gap-6 p-5 w-full'>
    <div className='flex flex-row gap-5'>
      <Input
        name='firstname'
        placeholder='Nom'
        value={formData.firstname}
        onChange={handleChange}
        variant='bordered'
        classNames={inputClasses}
        error={errors.firstname}
        required
      />
      <Input
        name='lastname'
        placeholder='Prénom'
        value={formData.lastname}
        onChange={handleChange}
        variant='bordered'
        classNames={inputClasses}
        error={errors.lastname}
        required
      />
    </div>
      <Input
        name='email'
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        variant='bordered'
        classNames={inputClasses}
        error={errors.email}
        required
      />
      <Input
        name='username'
        placeholder='Entrez votre pseudo'
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        variant='bordered'
        classNames={inputClasses}
        required
      />
      <Input
        type='password'
        name='password'
        placeholder='Entrez votre mot de passe'
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        variant='bordered'
        classNames={inputClasses}
        required
      />
      {
        error && <p style={{ color: 'red' }}>{error}</p>
      }
      <div className='flex flex-col justify-start gap-5'>
          <Checkbox 
            color='default'
            radius="sm"
            className='text-start justify-start'>
            En cochant cette case, vous acceptez nos
            <a> Conditions Générales d'Utilisation</a> et notre<a> Politique de Confidentialité</a>,
            incluant l'utilisation de cookies et de technologies similaires pour améliorer votre expérience et vous proposer des contenus personnalisés
          </Checkbox>
          <Checkbox color='default' radius="sm">En cochant cette case, vous acceptez de vous inscrire à notre Newsletter</Checkbox>
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
      
    </form>
  )
}

export default RegisterForm
