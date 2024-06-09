// src/components/FAQ.js
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

const faqItems = [
  {
    id: 1,
    question: 'Comment trouver un tatoueur près de chez moi ?',
    answer: 'Utilisez notre fonctionnalité TattooFinder pour rechercher des tatoueurs à proximité en entrant votre adresse ou en utilisant votre localisation actuelle.',
  },
  {
    id: 2,
    question: 'Comment puis-je voir des exemples de tatouages ?',
    answer: 'Visitez notre Tattoothèque pour voir une galerie de tatouages réalisés par différents artistes. Vous pouvez filtrer par style ou catégorie pour trouver des inspirations.',
  },
  {
    id: 3,
    question: 'Comment fonctionne l’outil de réalité augmentée TattooView ?',
    answer: 'L’outil TattooView vous permet de modéliser des tatouages sur votre corps en utilisant votre appareil photo. Vous pouvez essayer différents designs et voir comment ils s’adaptent à votre morphologie.',
  },
  {
    id: 4,
    question: 'Comment puis-je contacter un tatoueur ?',
    answer: 'Chaque profil de tatoueur comporte une section de contact où vous pouvez envoyer un message directement à l’artiste pour discuter de vos idées de tatouage et prendre rendez-vous.',
  },
  {
    id: 5,
    question: 'Qu’est-ce que TattooMag ?',
    answer: 'TattooMag est notre magazine en ligne dédié aux tatouages. Vous y trouverez des articles sur les dernières tendances, des interviews d’artistes et des conseils pour entretenir vos tatouages.',
  },
  {
    id: 6,
    question: 'Comment puis-je rejoindre la communauté TattooTalk ?',
    answer: 'Rejoindre TattooTalk est simple. Inscrivez-vous sur notre plateforme et commencez à interagir avec d’autres passionnés de tatouage. Vous pouvez poser des questions, partager vos expériences et obtenir des conseils.',
  },
  {
    id: 7,
    question: 'Quels sont les différents styles de tatouage disponibles ?',
    answer: 'Notre plateforme propose une variété de styles de tatouage, y compris le traditionnel, le néo-traditionnel, le réalisme, le minimalisme, le tribal, et bien d’autres. Utilisez nos filtres pour explorer les styles qui vous intéressent.',
  },
];

const FAQ = () => {
  return (
    <div className="my-8 bg-cover " style={{ backgroundImage: `url('/public/backgrounds/Calque_1.png')` }}>
      <h2 className="text-2xl font-bold mb-8 text-center text-zinc-50 bg-zinc-800">FAQ</h2>
      <div className="max-w-2xl mx-auto">
        <Accordion variant="shadow">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={`FAQ ${item.id}`}
              title={
                <div className="bg-zinc-50 text-zinc-900 text-lg p-4 rounded-t-md">
                  {item.question}
                </div>
              }
            >
              <div className="bg-zinc-500 text-zinc-100 p-4 rounded-b-md">
                {item.answer}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
