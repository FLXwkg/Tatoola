// src/components/Map.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import TattooDetails from '../tattoo/TattooDetails'

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 48.8566,
  lng: 2.3522
};

const locations = [
  { id: 1, name: 'Tatoueur 1', lat: 48.8566, lng: 2.3522 },
  { id: 2, name: 'Tatoueur 2', lat: 48.8567, lng: 2.3523 },
  // Ajouter d'autres emplacements de tatoueurs ici
];

const Map = () => {
  const [selectedTattooArtist, setSelectedTattooArtist] = useState(null);

  const handleMarkerClick = (artist) => {
    setSelectedTattooArtist(artist);
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCA-6qsVHcwMsDl9XjmvxkA3c98bPwuYD0">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      {selectedTattooArtist && (
        <TattooDetails artist={selectedTattooArtist} />
      )}
    </div>
  );
};

export default Map;
