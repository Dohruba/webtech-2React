import React, { useState, useEffect } from "react";
import _ from "lodash";
import Trip from "./Trip";
import Header from "../structure/Header";
import "../styles.css";
import { useNavigate } from "react-router";

const TripList = (props) => {
  
  const BASE_URL = props.baseUrl;
  
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {

    if (!props.logged) {
      navigate("/");
    }

    let mounted = true;
      setTimeout(() => {
        async function getTrips() {
        fetch(`${BASE_URL}/trips`, {
          method: "GET",
          credentials: "include",
        })
          .then((res) => res.json())
          .then(
            (result) => {
              if (mounted) {
                setIsLoaded(true);
                setTrips(result);
              }
            },
            (error) => {
              if (mounted) {
                setIsLoaded(true);
                setError(error);
              }
            }
          );
      }getTrips();
    }, 2000);
    return () => (mounted = false); //cleanup function
  }, [trips]);

  const handleRemoveTrip = (id) => {
    // setTrips(trips.filter((trip) => trip.trip_id !== id));
    const requestOptions = {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    };
    fetch(`${BASE_URL}/trips/` + id, requestOptions).then((res) =>
      console.log(res)
    );
  };
  const logout = () => {
    props.onLogout();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loading-screen">Warten bis Daten geladen sind...</div>;
  } else {
    return (
      <React.Fragment>
        <header>
        <Header onLogout={logout}/>
        </header>
        <main>
        <div className="trip-container">
        <div className="trip-list">
          {!_.isEmpty(trips) ? (
            trips.map((trip) => (
              <Trip
                key={trip.trip_id}
                {...trip}
                handleRemoveTrip={handleRemoveTrip}
              />
            ))
          ) : (
            <p className="message">Keine geplanten Reisen. </p>
          )}
        </div>
        </div>
        </main>
      </React.Fragment>
    );
  }
};

export default TripList;
