//for editing trips

import Api from "../../services/Api";
import "../styles.css";
import TripForm from "./TripForm";
import TripList from "./TripList";
import Header from "../structure/Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";


function TripEditor(props) {
  
  const BASE_URL = props.baseUrl;
    
  let navigate = useNavigate();
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trips, setTrips] = useState([]);

  const { id } = useParams(); //gets id from current route

  const tripToEdit = trips.find((trip) => trip.trip_id === id);
  // console.log(tripToEdit);

  useEffect(() => {
    if (!props.logged) {
      navigate("/");
    }
    let mounted = true;
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
    }
    getTrips();
    return () => (mounted = false); //cleanup function
  }, []);

  const handleOnSubmit = (trip) => {
    const data = {
      name: trip.tripname,
      start: trip.start,
      end: trip.end,
      country: trip.country,
    };

    const requestOptions = {
      method: "PATCH",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`${BASE_URL}/trips/` + id, requestOptions)
      .then((response) => response.json())
      .then((res) => res.status == "200");
    // navigate('/editTrip');
  };

  const logout = () => {
    props.onLogout();
  };

  return (
    <div>
      <Header onLogout={logout}/>
      <main>
        <React.Fragment>
          <div className="test">
            <TripForm
              isEditForm={true}
              trip={tripToEdit}
              handleOnSubmit={handleOnSubmit}
            />
          </div>
        </React.Fragment>
      </main>
    </div>
  );
}

export default TripEditor;
