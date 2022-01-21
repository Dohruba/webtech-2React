//for adding trips
import React, {useState} from 'react';
import TripForm from './TripForm';
import TripList from './TripList';
import Header from '../structure/Header';
import '../styles.css';

function TripAdder(){

    //connect Frontend to Backend
    //const BASE_URL = "https://travelsitebackend.herokuapp.com";
    const BASE_URL = "http://localhost:5000";

    const [trips, setTrips] = useState([]);
    let submitted = false;
    const handleOnSubmit = (trip) => {
       
        setTrips([...trips, trip]);
        const data = { 
            name: trip.name,
            start: trip.start,
            end: trip.end,
            country: trip.country }

        const requestOptions = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/trips`, requestOptions)
            .then(response => response.json())
            .then(res => res.status == "200");
        submitted = !submitted;
      };

    return(
        <React.Fragment>
        <Header/>
        <TripList rerender={submitted}/> {/* add props for removing edit and delete buttons on this list*/}
        <TripForm  isEditForm={false} handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );

}

export default TripAdder;