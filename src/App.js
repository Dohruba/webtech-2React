import "./components/styles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/login/LoginForm";
import TripEditor from "./components/trips/TripEditor";
import TripAdder from "./components/trips/TripAdder";
import TripList from "./components/trips/TripList";
import MyMap from "./components/Map/MyMap";
import Footer from "./components/structure/Footer";
import mapData from "./data/mapData.json";

const App = () => {

  //connect Frontend to Backend
  //const baseUrl = "https://travelsitebackend.herokuapp.com";
  const baseUrl = "http://localhost:5000";
  
  const [loggedIn, setLoggedIn] = useState(false);
  const loginTriedHandler = (result) => {
    setLoggedIn(result);
    console.log("Login: " + result);
  };
  const logoutHandler = async () =>{
    setLoggedIn(false);
    const response = await fetch(`${baseUrl}/logout`, {
      method: "POST",
      credentials: "include",
    });
    console.log(response);
  }

  console.log(loggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm 
            onTryLogin={loginTriedHandler}
           logged={loggedIn}
           baseURL = {baseUrl}
           />}
        />
        <Route exact path="/map" logged={loggedIn} element={<MyMap logged={loggedIn}/>} />
        <Route
          exact
          path="/addTrip"
          logged={loggedIn}
          element={<TripAdder baseUrl={baseUrl} logged={loggedIn} onLogout={logoutHandler}/>}
        />
        <Route
          exact
          path="/editTrip"
          logged={loggedIn}
          element={<TripList baseUrl={baseUrl} logged={loggedIn} onLogout={logoutHandler}/>}
        />
        <Route
          exact
          path="/editTrip/:id"
          logged={loggedIn}
          element={<TripEditor baseUrl={baseUrl} logged={loggedIn} onLogout={logoutHandler}/>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
