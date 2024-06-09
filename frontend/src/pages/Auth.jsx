import { useEffect } from 'react'
import LoginForm from '../components/forms/LoginForm'
import { useAuth } from '../contexts/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@nextui-org/button'

function Auth () {
  const navigate = useNavigate()

  const { state: { isLoggedIn, user }, loading } = useAuth()

  useEffect(() => {
    if (isLoggedIn) navigate('/dashboard')
  })

  return (
    <div className='flex flex-col items-center gap-5'>
      <LoginForm></LoginForm>
      <div className="border-t-2 border-zinc-900 my-4 w-full " />
      <h2 className='text-3xl font-bold'>Vous êtes Tatoueur ?</h2>
      <Button
        variant="ghost"
        isLoading={loading}
        type='submit'
        onClick={() => {}}
        className='border-zinc-900 text-zinc-900 bg-zinc-50 px-6'>
        Inscrivez vous en tant que tatoueur
      </Button>
      <div className="border-t-2 border-zinc-900 my-4 w-full " />
      <h2 className='text-3xl font-bold'>Vous n'avez pas de compte ?</h2>
      <Button as={Link} to="/register"
        variant="ghost"
        isLoading={loading}
        type='submit'
        onClick={() => {}}
        className='border-zinc-900 text-zinc-900 bg-zinc-50 px-20 mb-10'>
        Inscrivez vous
      </Button>
    </div>
  )
}

export default Auth
