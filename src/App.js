import "./components/styles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from './components/login/LoginForm';
import TripEditor from './components/trips/TripEditor';
import TripAdder from './components/trips/TripAdder';
import TripList from './components/trips/TripList';
import MyMap from './components/Map/MyMap';
import Footer from "./components/structure/Footer";
import mapData from "./data/mapData.json";

const App = () => {
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
      <Route exact path="/" element={<LoginForm onTryLogin={loginTriedHandler}/>}/>
      <Route exact path="/map" logged={loggedIn} element={<MyMap/>}/> 
      <Route exact path="/addTrip" logged={loggedIn} element={<TripAdder/>}/>
      <Route exact path="/editTrip" logged={loggedIn} element={<TripList/>}/> 
      <Route exact path="/editTrip/:id" logged={loggedIn} element={<TripEditor/>}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
