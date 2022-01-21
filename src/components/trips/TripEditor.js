//for editing trips

import Api from "../../services/Api";
import '../styles.css';
import TripForm from "./TripForm";
import TripList from "./TripList";
import Header from '../structure/Header';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import React, {useState, useEffect} from 'react';

//connect Frontend to Backend
// const BASE_URL = "https://travelsitebackend.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function TripEditor(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [trips, setTrips] = useState([]);
    
    let navigate = useNavigate();
    const {id} = useParams(); //gets id from current route
    
    const tripToEdit = trips.find((trip) => trip.trip_id === id);

    useEffect(() => {
      let mounted = true;
      async function getTrips(){
      fetch(`${BASE_URL}/trips`, {
        method: "GET",
        credentials: "include",
      }).then(res => res.json())
        .then(
          (result) => {
            if(mounted){
            setIsLoaded(true);
            setTrips(result);}
          },
          (error) => {
            if(mounted){
            setIsLoaded(true);
            setError(error);}
          }
        )};
        getTrips();
        return() => mounted = false; //cleanup function
    }, [id])

    const handleOnSubmit = (trip) => {
        const data = { 
            name: trip.tripname,
            start: trip.start,
            end: trip.end,
            country: trip.country }
      
        const requestOptions = {
            method: "PATCH",
            mode: "cors",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        fetch(`${BASE_URL}/trips/` +id, requestOptions)
            .then(response => response.json())
            .then(res => res.status == "200")
      // navigate('/editTrip');
    }
    

    return(
      <div>
        <Header/>
        <main>
        <React.Fragment>
          <div className="test">
          <TripForm isEditForm={true} trip={tripToEdit} handleOnSubmit={handleOnSubmit}/>
          </div>
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