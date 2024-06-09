// src/components/Proposals.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Image,} from '@nextui-org/react';

// exemple de données des propositions 

const proposals = [
  {
    id: 1,
    title: 'TattooFinder',
    description: 'Un service pour trouver le tatouage de ses rêves.',
    image: '/features/finder.webp',
    link: '/tattoo-finder',
  },
  {
    id: 2,
    title: 'TattooMag',
    description: 'Un magazine en ligne dédié aux tatouages.',
    image: '/features/mag.webp',
    link: '/tattoo-mag',
  },
  {
    id: 3,
    title: 'TattooView',
    description: 'Un outil de réalité augmentée pour modéliser des tatouages sur son corps.',
    image: '/features/view.webp',
    link: '/tattoo-view',
  },
  {
    id: 4,
    title: 'TattooTalk',
    description: 'Une plateforme pour entrer en contact avec la communauté du tatouage.',
    image: '/features/talk.webp',
    link: '/tattoo-talk',
  },
];

const Proposals = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Ce que nous proposons</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {proposals.map((proposal) => (
          <Card key={proposal.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={proposal.image}
                alt={proposal.title}
                width="100%"
                height="auto"
                className="rounded-t-lg"
              />
            </CardHeader>
            <CardBody className="p-4">
              <h3 className="font-semibold text-xl">{proposal.title}</h3>
              <p className="text-gray-600 mt-2">{proposal.description}</p>
            </CardBody>
            <CardFooter className="flex justify-center p-4">
              <Link to={proposal.link} className="text-zinc-900 hover:text-zinc-500">
                En savoir plus
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Proposals;
