import './components/styles.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import LoginPage from './components/login/LoginPage';
import TripEditor from './components/trips/TripEditor';
import TripAdder from './components/trips/TripAdder';
import TripList from './components/trips/TripList';
import Map from './components/map/Map';
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";

//for testing
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {

  const [trips, setTrips] = useLocalStorage('trips', []);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route exact path="/map" element={<Map/>}/>
      <Route exact path="/addTrip" element={<TripAdder/>}/>
      
      <Route path="/editTrip/:id" element={<TripEditor
      trips={trips} setTrips={setTrips}/>}/> 
      
      <Route exact path="/login" element={<LoginPage/>}/>
      
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;