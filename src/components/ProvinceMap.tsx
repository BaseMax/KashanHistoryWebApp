import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const cities = [
  { name: "کاشان", lat: 33.985, lng: 51.409 },
  { name: "اصفهان", lat: 32.6546, lng: 51.668 },
  { name: "نطنز", lat: 33.513, lng: 51.916 },
  { name: "اردستان", lat: 33.376, lng: 52.369 },
];

const AnyMapContainer = MapContainer as any;

interface ProvinceMapProps {
  className?: string;
  fillParent?: boolean;
}

const MapSizeFix: React.FC = () => {
  const map = useMap();
  React.useEffect(() => {
    const invalidate = () => map.invalidateSize();
    const t = setTimeout(invalidate, 0);
    window.addEventListener("resize", invalidate);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", invalidate);
    };
  }, [map]);
  return null;
};

const ProvinceMap: React.FC<ProvinceMapProps> = ({ className = "", fillParent = false }) => (
  <AnyMapContainer
    center={[32.6546, 51.668]}
    zoom={8}
    scrollWheelZoom={false}
    className="absolute inset-0"
    style={{ width: "100%", height: "100%", direction: "ltr" }}
  >
    <MapSizeFix />
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
  </AnyMapContainer>
);

export default ProvinceMap;
