//for adding trips
import React from 'react';
import Api from '../../services/Api';
import TripForm from './TripForm';
import TripList from './TripList';
import '../styles.css';
import { useState } from "react";

function TripAdder({trips, setTrips}){

    const handleOnSubmit = (trip) => {
        //console.log(trip);
        setTrips([...trips, trip]);
      };

    return(
        <React.Fragment>,
        <TripList trips={trips} setTrips={setTrips}/>,
        <TripForm isEditForm={false} handleOnSubmit={handleOnSubmit}/>,
        </React.Fragment>
    );

}

export default TripAdder;