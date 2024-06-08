import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TattooList from '../components/tattoo/TattooList';

const SearchArtist = () => {
  // State pour gérer les critères de recherche
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    tattooStyle: '',
  });

  // Fonction pour mettre à jour les critères de recherche
  const updateSearchCriteria = (criteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <div>
      <h1>Recherche de Tatoueurs</h1>
      {/* Barre de recherche */}
      <SearchBar updateSearchCriteria={updateSearchCriteria} />

      {/* Liste des tatoueurs */}
      <TattooList searchCriteria={searchCriteria} />
    </div>
  );
};

export default SearchArtist;
