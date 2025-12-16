import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import L from "leaflet";


import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const cities = [
  { name: "کاشان", lat: 33.985, lng: 51.409 },
  { name: "اصفهان", lat: 32.6546, lng: 51.668 },
  { name: "نطنز", lat: 33.513, lng: 51.916 },
  { name: "اردستان", lat: 33.376, lng: 52.369 },
];

const ProvinceMap: React.FC = () => (
  <div className="w-full flex justify-center my-4">
    <div className="w-full max-w-2xl h-64 rounded-lg overflow-hidden shadow">
      <MapContainer center={[32.6546, 51.668]} zoom={8} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // @ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city) => (
          <Marker key={city.name} position={[city.lat, city.lng]}>
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  </div>
);

export default ProvinceMap;
