import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet
import { useNavigate } from 'react-router-dom'
import npsLogo from '../../Assets/Arrowhead_3.png'
// import * as parkData from "./data/skateboard-parks.json";


import './Map.css'

// Create a custom icon using Leaflet
const customIcon = L.icon({
  iconUrl: npsLogo,
  iconSize: [32, 32], // Set the size of your icon
  iconAnchor: [16, 32], // Set the anchor point of your icon
});

function Map({allParksData}) {
  console.log('Map allParks: ', allParksData)

  const [activePark, setActivePark] = useState(null)
  const navigate = useNavigate()

  return (
    
    <MapContainer center={[37.96677, -100.85865]} zoom={4.5}scrollWheelZoom={true}>
      {activePark && (
      <Popup
        position={[
          activePark.latitude,
          activePark.longitude
        ]}
        onClose={() => {
          setActivePark(null);
        }}
      >
        <div>
          <h2>{activePark.name}</h2>
          <p>{activePark.description}</p>
        </div>
      </Popup>
  )}
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {allParksData.map(park => (
        <Marker
          key={park.parkCode}
          position={[
            park.latitude,
            park.longitude
          ]}
          eventHandlers = {
            {
              click: () => {
                navigate(`/park/${park.parkCode}`); // Navigate to the desired path
               setActivePark({latitude: park.latitude, longitude: park.longitude, description: park.description, name: park.fullName}) 
              }
                
            }
          }
          // onClick={() => {
          //   console.log('You Clicked Me')
          //   setActivePark({latitude: park.latitude, longitude: park.longitude, description: park.description, name: park.fullname});
          // }}
          icon={customIcon}
        />
      ))}
    </MapContainer>
  )
}
export default Map