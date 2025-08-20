'use client';

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface Location {
  id: number;
  city: string;
  cityArabic: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface GoogleMapComponentProps {
  locations: Location[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
  width?: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  locations,
  center = { lat: 24.7136, lng: 46.6753 }, // Default to Riyadh
  zoom = 10,
  height = '300px',
  width = '100%'
}) => {
  const mapContainerStyle = {
    width,
    height,
    borderRadius: '8px'
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Fallback if no API key is provided
  if (!apiKey || apiKey === 'YOUR_API_KEY') {
    return (
      <div 
        style={{ 
          width, 
          height, 
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            Interactive Map
          </div>
          <div style={{ fontSize: '12px', opacity: 0.8 }}>
            {locations.map(loc => loc.city).join(', ')}
          </div>
          <div style={{ fontSize: '10px', opacity: 0.6, marginTop: '8px' }}>
            Add Google Maps API key to enable
          </div>
        </div>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={options}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            title={location.city}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
