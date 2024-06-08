import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image, Button, Link, Divider } from '@nextui-org/react';
import Footer from '../components/footer/Footer';

const TattooView = () => {
  return (
    <div className="my-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">TattooView</h1>
        <p className="text-lg">Testez dès maintenant notre solution de réalité augmentée !</p>
        <div className="flex justify-center mt-4 gap-4">
          <Button as={Link} href="/tattooview/test" auto color="primary">
            Tester TattooView
          </Button>
          <Button as={Link} href="/tattooview/info" auto variant="flat" color="primary">
            C'est quoi TattooView ?
          </Button>
        </div>
      </div>

      <section className="my-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">C'est quoi TattooView</h2>
          <p className="text-lg">Notre solution de réalité augmentée</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={`/images/tattooview/image${i}.webp`}
                alt={`TattooView ${i}`}
                width="100%"
                height="200px"
                className="object-cover"
              />
              <CardBody className="p-4">
                <h3 className="font-semibold text-xl mb-2">Lorem ipsum</h3>
                <p className="text-gray-600">Pellentesque vitae dui rutrum, rhoncus tortor commodo, cursus diam. Cras lacus erat, tincidunt et viverra vitae, porta ac quam.</p>
              </CardBody>
            </Card>
          ))}
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

      <section className="my-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Notre Tattoothèque</h2>
          <p className="text-lg">Notre bibliothèque entièrement gratuite</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={`/images/tattootheque/tattoo${i}.webp`}
                alt={`Tattoo ${i}`}
                width="100%"
                height="200px"
                className="object-cover"
              />
              <CardBody className="p-4">
                <h3 className="font-semibold text-xl mb-2">Tattoo {i}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button auto as={Link} href="/tattoo-library" color="primary">
            Voir plus de photos
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TattooView;
