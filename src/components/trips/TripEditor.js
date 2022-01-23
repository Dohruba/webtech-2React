//for editing trips



import "../styles.css";
import TripForm from "./TripForm";
import Header from "../structure/Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";


function TripEditor(props) {
<<<<<<< HEAD
  
  const BASE_URL = props.baseUrl;
    
  let navigate = useNavigate();
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
=======
>>>>>>> lastChanges
  const [trips, setTrips] = useState([]);

  const { id } = useParams(); //gets id from current route

  const tripToEdit = trips.find((trip) => trip.trip_id === id);
<<<<<<< HEAD
  // console.log(tripToEdit);
=======
>>>>>>> lastChanges

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
              setTrips(result);
            }
          },
          (error) => {
          }
        );
    }
    getTrips();
    return () => (mounted = false); //cleanup function
  }, [navigate, props.logged]);

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
      .then((res) => res.status === "200");
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
