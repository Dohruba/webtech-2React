import './components/styles.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LoginPage from './components/login/LoginPage';
import TripEditor from './components/trips/TripEditor';
import TripAdder from './components/trips/TripAdder';
import TripList from './components/trips/TripList';
import Map from './components/map/MyMap';
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";

//for testing
import LoadTrips from './services/LoadTrips';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {

  const [trips, setTrips] = useLocalStorage('trips', []);
  const [loggedIn, setLoggedIn] = useState();
  const loginTriedHandler = (result) => {
    setLoggedIn(result);
    console.log("Login: " + result);
  };

  // let mainContent = <p>Not logged in yet</p>;
  // if (loggedIn) {
  //   mainContent = <MyMap loginState={loggedIn} />;
  // } else {
  //   mainContent = (
  //     <div>
  //       <h3>
  //         Jetzt einloggen und deine Reisen <br />
  //         ganz einfach über deine individuelle Reisekarte verwalten.
  //       </h3>
  //       <LoginForm onTryLogin={loginTriedHandler} logged={loggedIn} />
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      {loggedIn ? 
      <div>
      <Header/> 
      <Route exact path="/map" logged={loggedIn} element={<Map/>}/>
      <Route exact path="/addTrip" logged={loggedIn} element={<TripAdder
      trips={trips} setTrips={setTrips}/>}/>
      <Route exact path="/editTrip" logged={loggedIn} element={<TripList/>}/> 
      <Route exact path="/editTrip/:id" logged={loggedIn} element={<TripEditor
      trips={trips} setTrips={setTrips}/>}/> 
      <Route exact path="/loadTrips" element={<LoadTrips/>}/>
      </div>
      : "Bitte erst einloggen"}
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;