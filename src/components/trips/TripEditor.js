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
    }, [])

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
}

export default TripEditor;