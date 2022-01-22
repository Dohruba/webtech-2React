import Header from "../structure/Header";
import Footer from "../structure/Footer";
import "../styles.css";
import mapData from "../../data/mapData.json";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import { useNavigate } from 'react-router';

const MyMap = (props) => {

  if(props.location)console.log(props.location.some);
  // console.log(props);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trips, setTrips] = useState([]);
  let mapGeojson = mapData;
  let filteredVisited;
  let filteredGeo;
  let visitedCountries = [];

  const BASE_URL = props.baseUrl;

  let navigate = useNavigate();


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

  const fillVisitedCountries = (trips) => {
    let countries = [];
    trips.forEach((element) => {
      countries.push(element.country);
    });
    // console.log(trips);
    // console.log(countries);
    return countries;
  };

  useEffect(() => {
    if(!props.logged){
      navigate('/');
    }
    fetch(`${BASE_URL}/trips`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTrips(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  visitedCountries = fillVisitedCountries(trips);

  const displayData = () => {
    let filtered = {
      ...mapGeojson,
      features: mapGeojson.features.filter((feature) =>
        visitedCountries.includes(feature.properties.name)
      ),
    };
    return filtered;
  };

  filteredVisited = displayData();
  // console.log(filteredVisited.features);

  const visitedCountriesStyle = async (country, layer) => {
    if (filteredVisited.features.includes(country)) {
      layer.setStyle(visitedCountryStyle);
      // console.log(country);
    }
  };
  const notVisitedCountriesStyle = (country, layer) => {
    if (!filteredVisited.features.includes(country)) {
      layer.setStyle(countryStyle);
    } else {
      layer.setStyle({
        color: "black",
        fillColor: "black",
        weight: 0,
        fillOpacity: 0,
      });
    }
  };

  const logout = () => {
    props.onLogout();
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Warten bis Daten geladen sind...</div>;
  } else {
    return (
      <div>
        <Header onLogout={logout}/>
        <main style={{ paddingTop: "150px" }}>
          <MapContainer
            style={{ height: "45vh", width: "90vh" }}
            zoom={3}
            center={[20, 100]}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              data={mapGeojson}
              onEachFeature={visitedCountriesStyle}
            ></GeoJSON>
            <GeoJSON
              data={mapGeojson}
              onEachFeature={notVisitedCountriesStyle}
            ></GeoJSON>
          </MapContainer>
        </main>
      </div>
    );
  }
};
export default MyMap;