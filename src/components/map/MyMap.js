import Header from "../structure/Header";
import Footer from "../structure/Footer";
import '../styles.css';

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "../../data/mapData.json";
import "./MyMap.css";

const MyMap = () => {
  let trips = [];
  let filteredData = [];
  let filteredNotVisited = [];
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
  //const [visitedGeo, setVisitedGeo] = useState(mapData);
  //const [nonVisitedGeo, setNonVisitedGeo] = useState(mapData);

  const visitedCountries = (country, layer) => {
    //console.log(country);
  };
  
  if(true){
    trips = ["Germany", "Italy"]
  }else {
    trips = [];
  }
  filteredData = {
    ...mapData,
    features: mapData.features.filter((feature) =>
      trips.includes(feature.properties.name)
    ),
  };
  //setVisitedGeo(filteredData);
  filteredNotVisited = {
    ...mapData,
    features: mapData.features.filter(
      (feature) => !trips.includes(feature.properties.name)
    ),
  };
  //setNonVisitedGeo(filteredNotVisited);


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