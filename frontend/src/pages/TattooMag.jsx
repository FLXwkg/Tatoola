import React, { useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image, Link, Button, Divider, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';

const categories = [
  {
    id: 1,
    title: 'publié par Alexis',
    description: "Découvrez l'encre vegan 🌱",
    image: '/tatoomag/news1.webp',
    link: '/categorie-1',
  },
  {
    id: 2,
    title: 'publié par Chloé',
    description: 'Consignes de sécurité pour les tatouages 🚨',
    image: '/tatoomag/news2.webp',
    link: '/categorie-2',
  },
  {
    id: 3,
    title: 'publié par Tiffany',
    description: "Les meilleures pratiques à adopter pour l'été ☀️",
    image: '/tatoomag/news3.webp',
    link: '/categorie-3',
  },
  {
    id: 4,
    title: 'publié par Ewen',
    description: 'Top tendances Tattoo 2024 🎨',
    image: '/tatoomag/news4.webp',
    link: '/categorie-4',
  },
  {
    id: 5,
    title: 'publié par Léa',
    description: 'Histoire du tatouage à travers les âges 📚',
    image: '/tatoomag/news5.webp',
    link: '/categorie-5',
  },
  {
    id: 6,
    title: 'publié par Martin',
    description: 'Techniques modernes de tatouage 💉',
    image: '/tatoomag/news6.webp',
    link: '/categorie-6',
  },
  {
    id: 7,
    title: 'publié par Julie',
    description: 'Entretien des tatouages en hiver ❄️',
    image: '/tatoomag/news7.webp',
    link: '/categorie-7',
  },
  {
    id: 8,
    title: 'publié par Pierre',
    description: 'Tatouages temporaires : avantages et inconvénients ⏳',
    image: '/tatoomag/news8.webp',
    link: '/categorie-8',
  },
];

const TatooMag = () => {
  const [visibleCategories, setVisibleCategories] = useState(4);

  const handleLoadMore = () => {
    setVisibleCategories((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <header className="relative w-full h-64 overflow-hidden">
        <img src="/headers/tatootalk1.png" alt="Header Background" className="absolute w-full h-full object-cover top-0 left-0" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white mb-4">TatooMag</h2>
          <p className="text-white mb-4">Découvrez nos articles du moment</p>
          <Button auto className="bg-white text-black">Découvrir</Button>
        </div>
      </header>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-8 text-center">TatooMag</h2>
        <div className="max-w-[1200px] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
          {categories.slice(0, visibleCategories).map((category) => (
            <Card key={category.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex justify-between items-center p-4">
                <h3 className="font-semibold text-lg">{category.title}</h3>
                <Popover placement="top">
                  <PopoverTrigger>
                    <Button auto size="sm" className="bg-zinc-900 text-white">Nouvelle</Button>
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
                <Link href={category.link} className="text-zinc-900 hover:text-zinc-700">
                  En savoir plus
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {visibleCategories < categories.length && (
          <div className="flex justify-center mt-8">
            <Button auto className="bg-white text-black border border-black" onClick={handleLoadMore}>
              Voir plus d'articles
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TatooMag;