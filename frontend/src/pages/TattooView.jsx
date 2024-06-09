import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image, Button, Link, Divider } from '@nextui-org/react';
import Tattootheque from '../components/tattoo/Tattootheque';


const TattooView = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col items-center mb-8 "  style={{ backgroundImage: `url('/backgrounds/CalqueWhite.png')` }}>
        <div className='flex flex-col items-center text-center w-1/2 bg-zinc-900 p-5'>
          <img src='/icons/Mobile.png' />
          <h1 className="text-4xl text-zinc-50 font-bold mb-4">TattooView</h1>
          <p className="text-lg text-zinc-50">Testez dès maintenant notre solution de réalité augmentée !</p>
          <div className="flex justify-between mt-4 gap-4">
            <Button as={Link} href="/tattooview/test"
              variant="ghost"
              type='submit'
              className='border-zinc-900 text-zinc-900 bg-zinc-50 px-6'>
              Tester TattooView
            </Button>
            <Button as={Link} href="/tattooview/info"
              variant="ghost"
              type='submit'
              className='border-zinc-900 text-zinc-900 bg-zinc-50 px-6'>
              C'est quoi TattooView ?
            </Button>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center my-16">
        <div className=' bg-zinc-600 w-5/6 rounded-lg p-4'>
          <div className="text-center mb-8">
            <h2 className="text-3xl text-zinc-50 font-bold mb-4">C'est quoi TattooView</h2>
            <p className="text-lg text-zinc-50">Notre solution de réalité augmentée</p>
          </div>
        
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-0 shadow-none">
              <Image
                src={`/tattooview/img-1.png`}
                alt={`TattooView 1`}
                width="100%"
                height="200px"
                className="object-cover"
              />
              <h3 className="font-semibold text-xl text-zinc-50 mb-4">Une bibliothèque gratuite</h3>
              <p className="text-zinc-50">Une bibliothèque de tatouages possibles à tester gratuitement !</p>
            </div>
            <div className="p-0 shadow-none">
              <Image
                src={`/tattooview/img-2.png`}
                alt={`TattooView 2`}
                width="100%"
                height="200px"
                className="object-cover"
              />
              <h3 className="font-semibold text-xl text-zinc-50 mb-4">Une bibliothèque premium</h3>
              <p className="text-zinc-50">Une bibliothèque de tatouages premium disponible avec la version payante uniquement, en partenariat avec des tatoueurs français.</p>
            </div>
            <div className="p-0 shadow-none">
                  <Image
                    src={`/tattooview/img-3.png`}
                    alt={`TattooView 3`}
                    width="100%"
                    height="200px"
                    className="object-cover"
                  />
                  <h3 className="font-semibold text-xl text-zinc-50 mb-4">Pour tester le tatouage sur la peau</h3>
                  <p className="text-zinc-50"> En utilisant la caméra de votre appareil, vous pouvez voir à quoi ressemblerait un tatouage avant de passer à l'acte.</p>
                </div>
          </div>
        </div>
      </section>

      <section className="my-16 bg-gray-100 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Trouvé grâce à notre TattooFinder</h2>
        </div>
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full md:w-3/4 lg:w-1/2">
            <Image
              src="/images/tattoofinder/finder1.webp"
              alt="TattooFinder"
              width="100%"
              height="300px"
              className="object-cover"
            />
            <CardBody className="p-4">
              <Button auto as={Link} href="/tattoo-finder" color="primary" className="w-full">
                Voir notre TattooFinder
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>

      <div className=" flex flex-col items-center">
        <img src='/icons/Camera.png' className='w-20' />
      </div>
      <Tattootheque></Tattootheque>
    </div>
  );
};

export default TattooView;
