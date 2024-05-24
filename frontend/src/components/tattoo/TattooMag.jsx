// src/components/TatooMag.js
import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image, Link, Button, Divider, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';

const categories = [
  {
    id: 1,
    title: 'publié par Alexis',
    description: "Découvrez l'encre vegan 🌱",
    image: '/public/tatoomag/news1.webp',
    link: '/categorie-1',
  },
  {
    id: 2,
    title: 'publié par Chloé',
    description: 'Consignes de sécurité pour les tatouages 🚨',
    image: '/public/tatoomag/news2.webp',
    link: '/categorie-2',
  },
  {
    id: 3,
    title: 'publié par Tiffany',
    description: "Les meilleures pratiques à adopter pour l'été ☀️",
    image: '/public/tatoomag/news3.webp',
    link: '/categorie-3',
  },
  {
    id: 4,
    title: 'publié par Ewen',
    description: 'Top tendances Tattoo 2024 🎨',
    image: '/public/tatoomag/news4.webp',
    link: '/categorie-4',
  },
];

const TatooMag = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-8 text-center">TatooMag</h2>
      <div className="max-w-[1200px] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
        {categories.map((category) => (
          <Card key={category.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="flex justify-between items-center p-4">
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <Popover placement="top">
                <PopoverTrigger>
                  <Button auto size="sm" className="bg-primary-500 text-white">Nouvelle</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="p-2">
                    <p className="text-sm font-bold">{category.title}</p>
                    <p className="text-xs">{category.description}</p>
                  </div>
                </PopoverContent>
              </Popover>
            </CardHeader>
            <Image
              src={category.image}
              alt={category.title}
              width="100%"
              height="200px"
              className="object-cover"
            />
            <CardBody className="p-4">
              <p className="text-gray-600">{category.description}</p>
            </CardBody>
            <Divider />
            <CardFooter className="p-4 flex justify-between items-center">
              <Link href={category.link} className="text-primary-500 hover:text-primary-700">
                En savoir plus
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button auto>
          Voir plus d'articles
        </Button>
      </div>
    </div>
  );
};

export default TatooMag;
