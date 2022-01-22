//for adding trips
import React, { useEffect, useState } from "react";
import TripForm from "./TripForm";
import TripList from "./TripList";
import Header from "../structure/Header";
import "../styles.css";
import { useNavigate } from "react-router";

function TripAdder(props){

  const BASE_URL = props.baseUrl;

  let navigate = useNavigate();

  useEffect(() => {
    if (!props.logged) {
      navigate("/");
    }
  }, []);

  const [trips, setTrips] = useState([]);
  const handleOnSubmit = (trip) => {
    setTrips([...trips, trip]);
    const data = {
      name: trip.name,
      start: trip.start,
      end: trip.end,
      country: trip.country,
    };

    const requestOptions = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`${BASE_URL}/trips`, requestOptions)
      .then((response) => response.json())
      .then((res) => res.status == "200");
  };

  const logout = () => {
    props.onLogout();
  };

  return (
    <React.Fragment>
      <Header onLogout={logout}/>
      <TripList logged={props.logged}/>{" "}
      {/* add props for removing edit and delete buttons on this list*/}
      <TripForm isEditForm={false} handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
}

export default TripAdder;
