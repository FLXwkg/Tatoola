// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center my-4">
      <input type="text" placeholder="Insérer ville, adresse, région..." className="border p-2 w-1/2" />
      <button className="bg-blue-500 text-white p-2 ml-2">Rechercher</button>
    </div>
  );
};

export default SearchBar;



// import React, { useState } from 'react';

// const SearchBar = ({ updateSearchCriteria }) => {
//   const [location, setLocation] = useState('');
//   const [tattooStyle, setTattooStyle] = useState('');

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//     updateSearchCriteria({ location: e.target.value, tattooStyle });
//   };

//   const handleTattooStyleChange = (e) => {
//     setTattooStyle(e.target.value);
//     updateSearchCriteria({ location, tattooStyle: e.target.value });
//   };

//   return (
//     <div>
//       <input type="text" value={location} onChange={handleLocationChange} placeholder="Localisation" />
//       <input type="text" value={tattooStyle} onChange={handleTattooStyleChange} placeholder="Style de Tatouage" />
//       <input type="text" value= />
//       <input type="submit" value="Rechercher" />
//     </div>
//   );
// };

// export default SearchBar;
