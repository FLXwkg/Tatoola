import { Button } from '@nextui-org/button'
import RegisterForm from '../components/forms/RegisterForm'
import { Link } from 'react-router-dom'

function Register () {
  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-zinc-900 font-bold text-4xl pt-16'>Pas de compte ?</h1>
      <h2 className='text-zinc-900 font-bold text-3xl'>Inscrivez-vous !</h2>
      <RegisterForm />
      <div className="border-t-2 border-zinc-900 my-4 w-full " />
      <h2 className='text-3xl font-bold'>Vous êtes Tatoueur ?</h2>
      <Button as={Link} to="/become_artist"
        variant="ghost"
        onClick={() => {}}
        className='border-zinc-900 text-zinc-900 bg-zinc-50 px-6'>
        Inscrivez vous en tant que tatoueur
      </Button>
      <div className="border-t-2 border-zinc-900 my-4 w-full " />
      <h2 className='text-3xl font-bold'>Vous avez déjà un compte ?</h2>
      <Button as={Link} to="/authentication"
        variant="ghost"
        onClick={() => {}}
        className='border-zinc-900 text-zinc-900 bg-zinc-50 px-20 mb-10'>
        Connectez vous
      </Button>
    </div>
  )
}

export default Register
