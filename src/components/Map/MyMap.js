import Header from "../structure/Header";
import TripList from "../trips/TripList";
import "../styles.css";
import mapData from "../../data/mapData.json";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
<<<<<<< HEAD

const MyMap = (props) => {

  const BASE_URL = props.baseUrl;
=======
import { useNavigate } from 'react-router';
import { useTranslation} from 'react-i18next';

const MyMap = (props) => {
  const { t } = useTranslation();
  if(props.location)console.log(props.location.some);
  // console.log(props);
>>>>>>> lastChanges

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trips, setTrips] = useState([]);
  let mapGeojson = mapData;
  let filteredVisited;
  let visitedCountries = [];
<<<<<<< HEAD
=======

  const BASE_URL = props.baseUrl;

  let navigate = useNavigate();
>>>>>>> lastChanges

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
  },[BASE_URL, navigate, props.logged]);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loading-screen">{t('description.loadtext')}</div>;
  } else {
    return (
      <div>
<<<<<<< HEAD
        <Header />
        <main style={{ paddingTop: "150px" }}>
=======
        <Header onLogout={logout}/>
        <main>
          <div style={ {display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20} }>
          <div className="map">
>>>>>>> lastChanges
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
          </div>
            <div className="trip-list-map">
              <TripList baseUrl={props.baseUrl} logged={props.logged}/>
            </div>
          </div>
          </main>
        </div>
    );
  }
};
<<<<<<< HEAD
export default MyMap;

/*
 */
=======
export default MyMap;
>>>>>>> lastChanges
