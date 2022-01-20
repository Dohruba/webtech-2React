import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "../../data/mapData.json";
import "./MyMap.css";

const MyMap = () => {
  //const BASE_URL = "https://travelsitebackend.herokuapp.com";
  const BASE_URL = "http://localhost:5000";
  let state = {};
  let countryStyle = {
    fillColor: "black",
    fillOpacity: 0.75,
    color: "#a9801a",
    weight: 1.5,
  };
  let visitedCountryStyle = {
    fillColor: "#860bb8",
    fillOpacity: 0.5,
    color: "#a9801a",
    weight: 1.5,
  };
  const [visitedGeo, setVisitedGeo] = useState("");
  const [nonVisitedGeo, setNonVisitedGeo] = useState("");

  let trips = ["Germany", "Italy"];
  const filteredData = {
    ...mapData,
    features: mapData.features.filter((feature) =>
      trips.includes(feature.properties.name)
    ),
  };
  const filteredNotVisited = {
    ...mapData,
    features: mapData.features.filter(
      (feature) => !trips.includes(feature.properties.name)
    ),
  };

  const visitedCountries = (country, layer) => {
    console.log(country);
  };

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
      <GeoJSON
        style={visitedCountryStyle}
        data={filteredData.features}
        onEachFeature={visitedCountries}
      ></GeoJSON>
      <GeoJSON
        style={countryStyle}
        data={filteredNotVisited.features}
      ></GeoJSON>
    </MapContainer>
  );
};
export default MyMap;
