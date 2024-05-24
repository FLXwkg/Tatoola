// src/components/TattooDetails.js
import React from 'react';

const TattooDetails = ({ artist }) => {
  return (
    <div className="bg-white p-4 shadow-lg mt-4">
      <h2 className="text-2xl font-bold">{artist.name}</h2>
      <div className="my-4">
        <h3 className="text-xl font-bold mb-2">Styles disponibles :</h3>
        <div className="flex space-x-4">
          <button className="bg-gray-300 p-2">Style 1</button>
          <button className="bg-gray-300 p-2">Style 2</button>
          <button className="bg-gray-300 p-2">Style 3</button>
          <button className="bg-gray-300 p-2">Style 4</button>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-xl font-bold mb-2">Galerie :</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-200 h-32 flex items-center justify-center">Image 1</div>
          <div className="bg-gray-200 h-32 flex items-center justify-center">Image 2</div>
          <div className="bg-gray-200 h-32 flex items-center justify-center">Image 3</div>
          <div className="bg-gray-200 h-32 flex items-center justify-center">Image 4</div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2">Contacter</button>
        <button className="bg-green-500 text-white px-4 py-2">Voir son profil</button>
      </div>
    </div>
  );
};

export default TattooDetails;
