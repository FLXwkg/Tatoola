import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image, Link, Button, Divider, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';


const articles = [
  {
    id: 1,
    title: 'Les tendances de tatouage en 2024',
    description: "Découvrez les styles de tatouage qui vont dominer l'année 2024.",
    image: '/public/tatoomag/news1.webp',
    link: '/tattoomag/article-1',
    categories: ['Tendances', '2024'],
  },
  {
    id: 2,
    title: 'Tatouages et significations',
    description: 'Les symboles et leurs significations dans le monde des tatouages.',
    image: '/public/tatoomag/news2.webp',
    link: '/tattoomag/article-2',
    categories: ['Symboles', 'Significations'],
  },
  // Ajoutez plus d'articles ici
];

const TattooMag = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-8 text-center">TattooMag</h2>
      <div className="flex justify-center mb-4">
        <Button auto className="mr-2">Catégorie 1</Button>
        <Button auto className="mr-2">Catégorie 2</Button>
        <Button auto>Filtrer</Button>
      </div>
      <div className="max-w-[1200px] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
        {articles.map((article) => (
          <Card key={article.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="flex justify-between items-center p-4">
              <h3 className="font-semibold text-lg">{article.title}</h3>
              <Popover placement="top" color="primary">
                <PopoverTrigger>
                  <Button auto size="sm" className="bg-primary-500 text-white">Nouvelle</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-2 py-1">
                    <p className="text-sm">Cet article a été publié récemment.</p>
                  </div>
                </PopoverContent>
              </Popover>
            </CardHeader>
            <Image
              src={article.image}
              alt={article.title}
              width="100%"
              height="200px"
              className="object-cover"
            />
            <CardBody className="p-4">
              <p className="text-gray-600">{article.description}</p>
            </CardBody>
            <Divider />
            <CardFooter className="p-4 flex justify-between items-center">
              <Link href={article.link} className="text-primary-500 hover:text-primary-700">
                En savoir plus
              </Link>
              <div className="flex space-x-2">
                {article.categories.map((category, index) => (
                  <Button key={index} auto size="sm" variant="light" className="text-primary-500">
                    {category}
                  </Button>
                ))}
              </div>
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

export default TattooMag;
