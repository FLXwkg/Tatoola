import { useState } from 'react'
import { Checkbox, Input } from '@nextui-org/react'


function RegisterPart ({onChange}) {

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

  return (
    <>
    <div className='flex flex-row gap-5'>
      <Input
        name='firstname'
        placeholder='Nom'
        value={formData.firstname}
        onChange={handleChange}
        variant='bordered'
        classNames={inputClasses}
        required
      />
      <Input
        name='lastname'
        placeholder='Prénom'
        value={formData.lastname}
        onChange={handleChange}
        variant='bordered'
        classNames={inputClasses}
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
        required
      />
      <Input
        name='username'
        placeholder='Entrez votre pseudo'
        value={formData.username}
        onChange={handleChange}
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
        variant='bordered'
        classNames={inputClasses}
        required
      />
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
    </>
  )
}

export default RegisterPart
