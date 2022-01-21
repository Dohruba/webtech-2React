//for adding trips
import React, {useState} from 'react';
import TripForm from './TripForm';
import TripList from './TripList';
import Header from '../structure/Header';
import '../styles.css';

function TripAdder({baseUrl}){

    const BASE_URL = baseUrl;
    
    const [trips, setTrips] = useState([]);
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
      };

    return(
        <React.Fragment>
        <Header/>
        <TripList /> {/* add props for removing edit and delete buttons on this list*/}
        <TripForm  isEditForm={false} handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );

}

export default TripAdder;