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
    image: '../../../salons/salon01.webp',
    description: 'Description du Tattoo Shop 1',
  },
  {
    id: 2,
    name: 'Tattoo Shop 2',
    image: '../../../salons/salon02.webp',
    description: 'Description du Tattoo Shop 2',
  },
  {
    id: 3,
    name: 'Tattoo Shop 3',
    image: '../../../salons/salon03.webp',
    description: 'Description du Tattoo Shop 3',
  },
  {
    id: 4,
    name: 'Tattoo Shop 4',
    image: '../../../salons/salon04.webp',
    description: 'Description du Tattoo Shop 4',
  },
  {
    id: 5,
    name: 'Tattoo Shop 5',
    image: '../../../salons/salon05.webp',
    description: 'Description du Tattoo Shop 5',
  },
];

const TattooNearby = () => {
  return (
<section className="my-8">
  <h2 className="text-2xl font-bold mb-4 text-center text-zinc-900">Vos tatoueurs à proximité</h2>
  <swiper-container space-between="20" slides-per-view="1" navigation pagination >
    {shops.map((shop) => (
      <swiper-slide key={shop.id}>
        <Card className="w-full h-full max-w-[600px] mx-auto bg-zinc-800 text-zinc-50">
          <CardHeader className="pb-0 pt-2 px-4 flex-col">
            <h4 className="font-bold text-large text-center">{shop.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-4">
            <Image
              src={shop.image}
              alt={shop.name}
              className="object-cover rounded-xl w-full "
            />
             <p className="text-center mt-2">{shop.description}</p>
          </CardBody>
          <CardFooter className="flex justify-end p-4 mt-auto">
            <Button auto className="bg-zinc-50 text-zinc-900">Voir les détails</Button>
          </CardFooter>
        </Card>
      </swiper-slide>
    ))}
  </swiper-container>
</section>
  );
};



export default TattooNearby;
