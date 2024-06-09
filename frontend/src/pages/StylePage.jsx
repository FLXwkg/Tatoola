import React from 'react';
import { useParams } from 'react-router-dom';

const StylePage = () => {
  const { style } = useParams();

  // Exemple de données de tatouages pour le style
  const tattoos = [
    { id: 1, image: 'url-to-tattoo1', description: 'Tattoo 1 description' },
    { id: 2, image: 'url-to-tattoo2', description: 'Tattoo 2 description' },
    // Ajouter d'autres tatouages ici
  ];

  return (
    <div>
      <h1>{style} Tattoos</h1>
      <div className="tattoo-gallery grid grid-cols-4 gap-4">
        {tattoos.map((tattoo) => (
          <div key={tattoo.id} className="tattoo-item bg-gray-200 h-32 flex items-center justify-center">
            <img src={tattoo.image} alt={tattoo.description} />
            <p>{tattoo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylePage;