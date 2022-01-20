import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Trip from './Trip';
import '../styles.css';

const BASE_URL = "http://localhost:5000";

const TripList = () => {

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
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  const handleRemoveTrip = (id) => {
      setTrips(trips.filter((trip) => trip.trip_id !== id));
    };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Warten bis Daten geladen sind...</div>;
  } else {
  return (
    <React.Fragment>
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
