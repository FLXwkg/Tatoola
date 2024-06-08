// src/components/TattooersNearby.jsx
import React from 'react';
import { register } from 'swiper/element/bundle';
import { Card, CardBody, CardFooter, CardHeader, Image, Button } from '@nextui-org/react';



// Register Swiper custom elements
register();

// Exemple de données des shops de tatoueurs
const shops = [
  {
    id: 1,
    name: 'Tattoo Shop 1',
    image: '../../../public/salons/salon1.webp',
    description: 'Description du Tattoo Shop 1',
  },
  {
    id: 2,
    name: 'Tattoo Shop 2',
    image: '../../../public/salons/salon2.webp',
    description: 'Description du Tattoo Shop 2',
  },
  {
    id: 3,
    name: 'Tattoo Shop 3',
    image: '../../../public/salons/salon3.webp',
    description: 'Description du Tattoo Shop 3',
  },
  {
    id: 4,
    name: 'Tattoo Shop 4',
    image: '../../../public/salons/salon4.webp',
    description: 'Description du Tattoo Shop 4',
  },
  {
    id: 5,
    name: 'Tattoo Shop 5',
    image: '../../../public/salons/salon5.webp',
    description: 'Description du Tattoo Shop 5',
  },
];

const TattooNearby = () => {
    return (
        <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Vos tatoueurs à proximité</h2>
        <swiper-container space-between="0" slides-per-view="1" navigation pagination>
          {shops.map((shop) => (
            <swiper-slide key={shop.id}>
              <Card className="w-fit max-w-lg h-auto mx-auto">
                <CardHeader className="pb-0 pt-2 px-4 flex-col ">
                  <h4 className="font-bold text-large text-center">{shop.name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-4">
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    className="object-cover rounded-xl"
                    width="100%"
                    height="auto"
                  />
                  <p className="text-center mt-2">{shop.description}</p>
                </CardBody>
                <CardFooter className="flex justify-center p-8">
                  <Button auto>Voir les détails</Button>
                </CardFooter>
              </Card>
            </swiper-slide>
          ))}
        </swiper-container>
      </section>
    );
  };

export default TattooNearby;
