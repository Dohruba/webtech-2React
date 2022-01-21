import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Trip from './Trip';
import Header from '../structure/Header';
import '../styles.css';

const BASE_URL = "http://localhost:5000";

const TripList = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/trips`, {
      method: "GET",
      credentials: "include",
    }).then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTrips(result);
          // props.handleOnSubmit(trip);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  const handleRemoveTrip = (id) => {
      // setTrips(trips.filter((trip) => trip.trip_id !== id));
    const requestOptions = {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    };
    fetch(`${BASE_URL}/trips/`+id, requestOptions)
        .then(res => console.log(res));   
    };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Warten bis Daten geladen sind...</div>;
  } else {
  return (
    <React.Fragment>
      <Header/>
    <div className="trip-list">
      {!_.isEmpty(trips) ? (
        trips.map((trip) => (
          <Trip key={trip.trip_id} {...trip} handleRemoveTrip={handleRemoveTrip} />
        ))) : (<p className="message">Keine geplanten Reisen. </p>)}
    </div>
  </React.Fragment>
  )}
};

export default TripList;
