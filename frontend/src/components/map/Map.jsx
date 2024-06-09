import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScriptNext } from '@react-google-maps/api';
import TattooDetails from '../tattoo/TattooDetails';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  width: '80%',
  height: '400px',
  margin: 'auto',
  borderRadius: '8px',
  border: '4px solid black'
};

const center = {
  lat: 47.2184,
  lng: -1.5536
};

// Exemple de données des emplacements des tatoueurs avec des informations détaillées
const initialLocations = [
  // Tatoueurs déjà créés
  {
    id: 1,
    name: 'Inked Dreams',
    lat: 47.2186,
    lng: -1.5563,
    image: 'url-to-image-inked-dreams',
    styles: ['Marin', 'Blackwork'],
    address: '12 Rue du Calvaire, 44000 Nantes',
    images: ['/public/tatoos/marin2.webp', '/public/tatoos/nb1.webp', '/public/tatoos/nb.webp', '/public/tatoos/marin.webp']
  },
  {
    id: 2,
    name: 'Artistic Skin',
    lat: 47.2145,
    lng: -1.5594,
    image: 'url-to-image-artistic-skin',
    styles: ['Japonais', 'Minimaliste'],
    address: '34 Boulevard Gabriel Guist\'hiau, 44000 Nantes',
    images: ['/public/tatoos/mini.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap1.webp', '/public/tatoos/mini2.webp']
  },
  {
    id: 3,
    name: 'Paris Ink',
    lat: 48.8606,
    lng: 2.3376,
    image: 'url-to-image-paris-ink',
    styles: ['Japonais', 'Minimaliste'],
    address: '15 Rue de Rivoli, 75001 Paris',
    images: ['/public/tatoos/jap2.webp', '/public/tatoos/jap3.webp', '/public/tatoos/mini3.webp', '/public/tatoos/mini2.webp']
  },
  {
    id: 4,
    name: 'Tattoo Art Paris',
    lat: 48.8642,
    lng: 2.3398,
    image: 'url-to-image-tattoo-art-paris',
    styles: ['Marin', 'Blackwork'],
    address: '27 Avenue de l\'Opéra, 75001 Paris',
    images: ['/public/tatoos/marin2.webp', '/public/tatoos/nb1.webp', '/public/tatoos/nb.webp', '/public/tatoos/marin.webp']
  },
  {
    id: 5,
    name: 'Lyon Ink Masters',
    lat: 45.7640,
    lng: 4.8357,
    image: 'url-to-image-lyon-ink-masters',
    styles: ['Pop Culture', 'Polynésien'],
    address: '45 Quai Saint-Antoine, 69002 Lyon',
    images: ['/public/tatoos/pop1.webp', '/public/tatoos/pop.webp', '/public/tatoos/tribal.webp', '/public/tatoos/tribal1.webp']
  },
  
  // Nouveaux tatoueurs
  // Nantes
  {
    id: 6,
    name: 'Nantes Ink Spot',
    lat: 47.2402,
    lng: -1.5648,
    image: 'url-to-image-nantes-ink-spot',
    styles: ['Japon', 'Linework'],
    address: '78 Boulevard des Belges, 44300 Nantes',
    images: ['/public/tatoos/jap3.webp', '/public/tatoos/jap2.webp', '/public/tatoos/mini3.webp', '/public/tatoos/mini4.webp']
  },
  {
    id: 7,
    name: 'Creative Tattoos',
    lat: 47.2108,
    lng: -1.5411,
    image: 'url-to-image-creative-tattoos',
    styles: ['Pop', 'Tribal'],
    address: '5 Rue de Strasbourg, 44000 Nantes',
    images: ['/public/tatoos/pop2.webp', '/public/tatoos/tribal1.webp', '/public/tatoos/tribal.webp', '/public/tatoos/pop3.webp']
  },
  
  // Paris
  {
    id: 8,
    name: 'Eiffel Ink',
    lat: 48.8500,
    lng: 2.3100,
    image: 'url-to-image-eiffel-ink',
    styles: ['Japon', 'Linework'],
    address: '22 Rue Cler, 75007 Paris',
    images: ['/public/tatoos/jap3.webp', '/public/tatoos/jap2.webp', '/public/tatoos/mini3.webp', '/public/tatoos/mini4.webp']
  },
  {
    id: 9,
    name: 'Montmartre Tattoos',
    lat: 48.8867,
    lng: 2.3431,
    image: 'url-to-image-montmartre-tattoos',
    styles: ['Pop', 'Tribal'],
    address: '10 Rue Tholozé, 75018 Paris',
    images: ['/public/tatoos/pop2.webp', '/public/tatoos/tribal1.webp', '/public/tatoos/tribal.webp', '/public/tatoos/pop3.webp']
  },
  
  // Lyon
  {
    id: 10,
    name: 'Old Town Ink',
    lat: 45.7673,
    lng: 4.8343,
    image: 'url-to-image-old-town-ink',
    styles: ['Black and Grey', 'Traditional'],
    address: '16 Rue Saint-Jean, 69005 Lyon',
    images: ['/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp']
  },
  {
    id: 11,
    name: 'Modern Tattoo Lyon',
    lat: 45.7535,
    lng: 4.8480,
    image: 'url-to-image-modern-tattoo-lyon',
    styles: ['Japon', 'Linework'],
    address: '28 Rue de Marseille, 69007 Lyon',
    images: ['/public/tatoos/jap3.webp', '/public/tatoos/jap2.webp', '/public/tatoos/mini3.webp', '/public/tatoos/mini4.webp']
  },
  
  // Marseille
  {
    id: 12,
    name: 'Marseille Inked',
    lat: 43.2965,
    lng: 5.3698,
    image: 'url-to-image-marseille-inked',
    styles: ['Realism', 'Tribal'],
    address: '21 Rue de la République, 13002 Marseille',
    images: ['/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp']
  },
  
  // Bordeaux
  {
    id: 13,
    name: 'Bordeaux Body Art',
    lat: 44.8378,
    lng: -0.5792,
    image: 'url-to-image-bordeaux-body-art',
    styles: ['Geometric', 'Blackwork'],
    address: '12 Rue Sainte-Catherine, 33000 Bordeaux',
    images: ['/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp']
  },
  
  // Lille
  {
    id: 14,
    name: 'Lille Tattoo Studio',
    lat: 50.6292,
    lng: 3.0573,
    image: 'url-to-image-lille-tattoo-studio',
    styles: ['Watercolor', 'Portrait'],
    address: '8 Rue de Béthune, 59800 Lille',
    images: ['/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp', '/public/tatoos/jap.webp']
  }
];

const Map = () => {
  const [selectedTattooArtist, setSelectedTattooArtist] = useState(null);
  const [locations, setLocations] = useState(initialLocations);
  const [map, setMap] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const address = inputRef.current.value;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const newCenter = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          map.panTo(newCenter);
          map.setZoom(12);
        } else {
          alert('Adresse introuvable');
        }
      });
    }
  };

  return (
    <div>
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
      <input
        ref={inputRef}
        type="text"
        placeholder="Rechercher un lieu en France"
        onKeyPress={handleKeyPress}
        style={{
          width: '80%',
          padding: '10px',
          margin: '10px auto auto', // Center horizontally
          display: 'flex', // Make input block-level element
          border: '1px solid black', // Border style
          borderRadius: '8px', // Rounded corners
        }}
      />
      {selectedTattooArtist && (
        <TattooDetails artist={selectedTattooArtist} />
      )}
    </div>
  );
};

export default Map;