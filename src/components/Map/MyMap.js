import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "../../data/mapData.json";
import './MyMap.css';

const MyMap = () => {
  let state = {};
  let countryStyle ={
    fillColor: "black",
    fillOpacity: 0.75,
    color: "#9d8c2f"
  }


  return (
    <MapContainer
      style={{ height: "45vh", width: "100vh" }}
      zoom={2}
      center={[20, 100]}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON style={countryStyle} data={mapData.features}></GeoJSON>
    </MapContainer>
  );
};
export default MyMap;
