//for editing trips

import Api from "../../services/Api";
import '../styles.css';
import TripForm from "./TripForm";
import TripList from "./TripList";
import Header from '../structure/Header';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import React from 'react';

function TripEditor({trips, setTrips}){

    let navigate = useNavigate();
    const {id} = useParams();
    const tripToEdit = trips.find((trip) => trip.id === id);

    const handleOnSubmit = (trip) => {
      const filteredTrips = trips.filter((trip) => trip.id !== id);
      setTrips([trip, ...filteredTrips]);
      navigate('/editTrip');
    }

    //connect Frontend to Backend
    // const BASE_URL = "https://travelsitebackend.herokuapp.com";
    const BASE_URL = "http://localhost:5000";
    
    // let dataArray = [];
    // var arrayLength = 0;

    return(
      <div>
        <Header/>
        <main>
          <React.Fragment>
          <TripList trips={trips} setTrips={setTrips}/>
          <TripForm isEditForm={true} trip={tripToEdit} handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
        </main>
      </div>
    );

    /*
    //Ricardos Part to activate later

    //Geojson sind die Polygone (Schatten auf den Map)
    const loadData = async () => {
    const data = await fetch(
        "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson"
      );
      return data.json();
    };
    //for dropdown of trips
    const getNames = async () => {
        const geoJson = await loadData();
        geoJson.features.forEach(loadNames);
      };
    
      function loadNames(item) {
        //console.log(item.properties.name);
        let dropDownMenu = document.querySelector(".dropdown");
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(item.properties.name));
        dropDownMenu.append(option);
      }
    */
}

export default TripEditor;