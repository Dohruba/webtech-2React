import "./components/styles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/login/LoginForm";
import TripEditor from "./components/trips/TripEditor";
import TripAdder from "./components/trips/TripAdder";
import TripList from "./components/trips/TripList";
import MyMap from "./components/map/MyMap";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import mapData from "./data/mapData.json";

//for testing
import LoadTrips from "./services/LoadTrips";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [trips, setTrips] = useLocalStorage("trips", []);
  const [loggedIn, setLoggedIn] = useState();
  const loginTriedHandler = (result) => {
    setLoggedIn(result);
    console.log("Login: " + result);
  };

  const loadGeoHandler = (data) => {
    console.log(data);
    if(changeDone){
      console.log("SAME");
      changeDone = false;
    }
  };
  let changeDone = false;
  const onChangeDone = () =>{
    changeDone=true;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm onTryLogin={loginTriedHandler} onChange={onChangeDone} />}
        />
        <Route
          exact
          path="/map"
          logged={loggedIn}
          element={<MyMap onLoadMap={loadGeoHandler}/>}
        />
        <Route
          exact
          path="/addTrip"
          logged={loggedIn}
          element={<TripAdder trips={trips} setTrips={setTrips} />}
        />
        <Route
          exact
          path="/editTrip"
          logged={loggedIn}
          element={<TripList />}
        />
        <Route
          exact
          path="/editTrip/:id"
          logged={loggedIn}
          element={<TripEditor trips={trips} setTrips={setTrips} />}
        />
        <Route exact path="/loadTrips" element={<LoadTrips />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
