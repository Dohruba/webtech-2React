import './components/styles.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LoginPage from './components/login/LoginPage';
import TripEditor from './components/trips/TripEditor';
import TripAdder from './components/trips/TripAdder';
import TripList from './components/trips/TripList';
import Map from './components/map/Map';
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";

//for testing
import LoadTrips from './services/LoadTrips';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {

  const [trips, setTrips] = useLocalStorage('trips', []);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route exact path="/map" element={<Map/>}/>
      <Route exact path="/addTrip" element={<TripAdder
      trips={trips} setTrips={setTrips}/>}/>
      <Route exact path="/editTrip" element={<TripList/>}/> 
      <Route exact path="/editTrip/:id" element={<TripEditor
      trips={trips} setTrips={setTrips}/>}/> 
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/loadTrips" element={<LoadTrips/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;