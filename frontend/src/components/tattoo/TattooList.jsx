import React, { useEffect, useState } from 'react';

const TattooList = ({ searchCriteria }) => {
  const [tattooists, setTattooists] = useState([]);

  useEffect(() => {
    // Ici, vous pouvez implémenter la logique pour récupérer les tatoueurs en fonction des critères de recherche
    // Par exemple, en utilisant une API backend
    // Vous pouvez mettre à jour le state `tattooists` avec les résultats de la recherche
    // Exemple de structure de donnée : [{ name: 'Tatoueur 1', location: 'Paris', style: 'Abstrait' }, ...]
  }, [searchCriteria]);

  return (
    <div>
      <h2>Liste des Tatoueurs</h2>
      <ul>
        {tattooists.map((tattooist, index) => (
          <li key={index}>
            <p>Nom: {tattooist.name}</p>
            <p>Localisation: {tattooist.location}</p>
            <p>Style: {tattooist.style}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TattooList;
