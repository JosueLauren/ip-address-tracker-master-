import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Rectangle,
  Circle,
} from "react-leaflet";

import { useContext } from "react";

import { DataLocationContext } from "./../../context/DataLocationContext";

export const Map = () => {
  const { datalocation } = useContext(DataLocationContext);

  const latitude = datalocation.lat ? datalocation.lat : 51.51;
  const longitude = datalocation.lon ? datalocation.lon : -0.12;

  return (
    <div id="map">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <ChangeView center={[latitude, longitude]} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{datalocation.location}</Popup>
        </Marker>
        <Rectangle
          bounds={[
            [latitude, longitude],
            [latitude - 0.01, longitude - 0.05],
          ]}
          pathOptions={{ color: "black" }}
        />
        <Circle
          center={[latitude, longitude]}
          pathOptions={{ color: "red" }}
          radius={200}
        />
      </MapContainer>
    </div>
  );
};

interface ChangeViewProps {
  center: [number, number];
  zoom: number;
}

function ChangeView({ center, zoom }: ChangeViewProps) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
