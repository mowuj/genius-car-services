import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 23.83549683303406,
  lng: 90.42928647032694
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAZJJjNGgcpWkikeaBsv9i9kvGR85BgrWU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)