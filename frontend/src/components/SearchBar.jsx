import React, { useState } from 'react';

const SearchBar = ({ updateSearchCriteria }) => {
  const [location, setLocation] = useState('');
  const [tattooStyle, setTattooStyle] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    updateSearchCriteria({ location: e.target.value, tattooStyle });
  };

  const handleTattooStyleChange = (e) => {
    setTattooStyle(e.target.value);
    updateSearchCriteria({ location, tattooStyle: e.target.value });
  };

  return (
    <div>
      <input type="text" value={location} onChange={handleLocationChange} placeholder="Localisation" />
      <input type="text" value={tattooStyle} onChange={handleTattooStyleChange} placeholder="Style de Tatouage" />
    </div>
  );
};

export default SearchBar;
