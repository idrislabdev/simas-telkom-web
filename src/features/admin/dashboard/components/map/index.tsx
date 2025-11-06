"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// ⛳ Map auto-fly ketika hasil ditemukan
const FlyToWhenFound: React.FC<{
  position: [number, number] | null;
  zoom?: number;
}> = ({ position, zoom = 16 }) => {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, zoom, { duration: 0.8 });
  }, [map, position, zoom]);
  return null;
};

// 🚀 Pindahkan tombol zoom ke kanan atas
const MoveZoomControlTopRight: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    map.zoomControl.setPosition("topright");
  }, [map]);
  return null;
};

const DashboardMap: React.FC = () => {
  const [found] = useState<{
    latlng: [number, number];
    label: string;
  } | null>(null);

  return (
    <div
      className="bg-white rounded-md h-full w-full flex"
      style={{ position: "relative" }}
    >
      <MapContainer
        style={{ width: "100%", height: "100%", borderRadius: "8px" }}
        center={{ lat: -8.108, lng: 114.26 }}
        zoom={7}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <MoveZoomControlTopRight />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {found && (
          <>
            <Marker position={found.latlng as L.LatLngExpression}>
              <Popup>{found.label}</Popup>
            </Marker>
            <FlyToWhenFound position={found.latlng} zoom={16} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default DashboardMap;
