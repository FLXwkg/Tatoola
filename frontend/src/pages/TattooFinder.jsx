// src/pages/Tattoofinder.jsx
import React, { useState } from 'react';
import { Input, Button, Card, CardBody, CardHeader, Image, Divider, Link, Badge, CardFooter } from '@nextui-org/react';
import Footer from '../components/footer/Footer';


const Tattoofinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = () => {
    // Implémentez ici la logique de recherche avec Elasticsearch
    console.log('Recherche pour:', searchQuery);
  };

  const categories = [
    'Japonais', 'Polynésien', 'Pop Culture'
  ];

  const sampleResults = [
    { id: 1, title: 'Tattoo Artist 1', image: '/public/samples/tattoo1.webp', premium: true },
    { id: 2, title: 'Tattoo Artist 2', image: '/public/samples/tattoo2.webp', premium: false },
    { id: 3, title: 'Tattoo Artist 3', image: '/public/samples/tattoo3.webp', premium: false },
    { id: 4, title: 'Tattoo Artist 4', image: '/public/samples/tattoo4.webp', premium: true },
    // Ajoutez d'autres résultats fictifs ici
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">TattooFinder</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Input
            clearable
            underlined
            fullWidth
            placeholder="Un tatoueur, un style, une idée..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-lg"
          />
          <Button className="mt-4" onClick={handleSearch}>
            Rechercher
          </Button>
        </div>

        <div className="mb-8 flex space-x-4">
          {categories.map((category, index) => (
            <Button key={index} auto className="bg-indigo-500 text-white">
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleResults.map((result) => (
            <Card key={result.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="relative">
                {result.premium && (
                  <Badge
                    color="secondary"
                    content="PREMIUM"
                    className="absolute top-2 right-2"
                  />
                )}
              </CardHeader>
              <Image
                src={result.image}
                alt={result.title}
                width="100%"
                height="200px"
                className="object-cover"
              />
              <CardBody className="p-4">
                <h3 className="font-semibold text-lg">{result.title}</h3>
              </CardBody>
              <Divider />
              <CardFooter className="p-4 flex justify-between items-center">
                <Link href="#" className="text-primary-500 hover:text-primary-700">
                  Voir plus
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

    <Footer />
    </div>
  );
};

export default Tattoofinder;
