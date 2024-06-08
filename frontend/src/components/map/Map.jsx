import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScriptNext } from '@react-google-maps/api';
import TattooDetails from '../tattoo/TattooDetails';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 47.2184,
  lng: -1.5536
};

// Exemple de données des emplacements des tatoueurs à Nantes
const initialLocations = [
  { id: 1, name: 'Tatoueur 1', lat: 47.2184, lng: -1.5536 },
  { id: 2, name: 'Tatoueur 2', lat: 47.2192, lng: -1.5646 },
  // Ajouter d'autres emplacements de tatoueurs ici
];

const Map = () => {
  const [selectedTattooArtist, setSelectedTattooArtist] = useState(null);
  const [locations, setLocations] = useState(initialLocations);
  const [map, setMap] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (map && window.google && window.google.maps && window.google.maps.places) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['geocode'],
        componentRestrictions: { country: 'fr' }
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          const newCenter = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          };
          map.panTo(newCenter);
          map.setZoom(12);
        }
      });

      // Supprimer les anciens marqueurs
      map.markers.forEach(marker => marker.setMap(null));
      map.markers = [];

      // Ajouter de nouveaux marqueurs
      locations.forEach(location => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name
        });
        marker.addListener('click', () => {
          setSelectedTattooArtist(location);
        });
        map.markers.push(marker);
      });
    }
  }, [map, locations]);

  const handleLoad = (mapInstance) => {
    mapInstance.markers = [];
    setMap(mapInstance);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Rechercher un lieu en France"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <LoadScriptNext
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={['places']}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={handleLoad}
        />
      </LoadScriptNext>
      {selectedTattooArtist && (
        <TattooDetails artist={selectedTattooArtist} />
      )}
    </div>
  );
};

export default Map;
