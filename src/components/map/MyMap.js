import Header from "../structure/Header";
import Footer from "../structure/Footer";
import "../styles.css";
import mapData from "../../data/mapData.json"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

const MyMap = (props) => {
  let mapGeojson = props.mapGeo;
  let filteredData = [];
  let filteredVisited = [];

  //const BASE_URL = "https://travelsitebackend.herokuapp.com";
  const BASE_URL = "http://localhost:5000";

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
  useEffect(() => {
    fetch(`${BASE_URL}/trips`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((trip) => {
        let tripsJSON = trip;
        //console.log(tripsJSON);
        let visitedCountries = [];
        if (tripsJSON.length > 0) {
          tripsJSON.forEach((trip) => {
            visitedCountries.push(trip.country);
          });
        }
        //console.log(visitedCountries);
        //console.log(props.mapGeo);
        const displayData = async () => {
          /*filteredData = {
            ...mapGeojson,
            features: mapGeojson.features.filter((feature) =>
              visitedCountries.includes(feature.properties.name)
            ),
          };*/

          filteredVisited = {
            ...mapGeojson,
            features: mapGeojson.features.filter(
              (feature) => visitedCountries.includes(feature.properties.name)
            ),
          };
          console.log(filteredVisited);
          props.onLoadMap(filteredVisited);
        };
        displayData();
      });

  }, []);

  const visitedCountries = async (country, layer) => {
     if(country.properties.name ==="Spain") {console.log(props.mapGeo.features.includes(country));
     console.log(country);
     }
     if(props.mapGeo.features.includes(country)){
      layer.setStyle(visitedCountryStyle);
     }     
  };
  const notVisitedCountries = async (country,layer) =>{
    if(!props.mapGeo.features.includes(country)){
      layer.setStyle(countryStyle);
     }else{
       layer.setStyle({
         color: "black",
         fillColor: "black",
         weight: 0,
         fillOpacity: 0,
       })
     }
  }
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "150px" }}>
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
          <GeoJSON data={mapGeojson} onEachFeature={visitedCountries}></GeoJSON>
          <GeoJSON data={mapData} onEachFeature={notVisitedCountries}></GeoJSON>
        </MapContainer>
      </main>
    </div>
  );
};
export default MyMap;
