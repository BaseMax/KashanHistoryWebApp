import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { citiesData} from "../data/cities";
import type { City} from "../data/cities";

const AnyMapContainer = MapContainer as any;

const cities = citiesData as City[];

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
    className={`absolute inset-0 ${className}`}
    style={{ width: "100%", height: fillParent ? "100%" : "100%", direction: "ltr" }}
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
