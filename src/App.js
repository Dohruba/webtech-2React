import "./components/styles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/login/LoginForm";
import TripEditor from "./components/trips/TripEditor";
import TripAdder from "./components/trips/TripAdder";
import TripList from "./components/trips/TripList";
import MyMap from "./components/Map/MyMap";
import Footer from "./components/structure/Footer";

const App = () => {
<<<<<<< HEAD
  //connect Frontend to Backend
  //const baseUrl = "https://travelsitebackend.herokuapp.com";
  const baseUrl = "http://localhost:5000";
  
  const [loggedIn, setLoggedIn] = useState();
=======
  const baseUrl = "https://travelsitebackend.herokuapp.com";
  // const baseUrl = "http://localhost:5000";
  const [loggedIn, setLoggedIn] = useState(false);
>>>>>>> lastChanges
  const loginTriedHandler = (result) => {
    setLoggedIn(result);
    // console.log("Login: " + result);
  };

  const logoutHandler = async () =>{
    setLoggedIn(false);
    const response = await fetch(`${baseUrl}/logout`, {
      method: "POST",
      credentials: "include",
    });
    // console.log(response);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
<<<<<<< HEAD
          element={<LoginForm logged={loggedIn} baseUrl={baseUrl} onTryLogin={loginTriedHandler} />}
        />
        <Route exact path="/map" logged={loggedIn} element={<MyMap baseUrl={baseUrl}/>} />
=======
          element={<LoginForm 
            onTryLogin={loginTriedHandler}
           logged={loggedIn} 
           baseUrl={baseUrl}/>}
        />
        <Route exact path="/map" 
        logged={loggedIn} 
        element={<MyMap 
          logged={loggedIn}
        baseUrl={baseUrl}/>} />
>>>>>>> lastChanges
        <Route
          exact
          path="/addTrip"
          logged={loggedIn}
<<<<<<< HEAD
          element={<TripAdder baseUrl={baseUrl} logged={loggedIn} onLogout={logoutHandler}/>}
=======
          element={<TripAdder 
            logged={loggedIn} 
            onLogout={logoutHandler} 
            baseUrl={baseUrl}/>}
>>>>>>> lastChanges
        />
        <Route
          exact
          path="/editTrip"
          logged={loggedIn}
<<<<<<< HEAD
          element={<TripList baseUrl={baseUrl} logged={loggedIn} onLogout={logoutHandler}/>}
=======
          element={<TripList 
            logged={loggedIn} 
            onLogout={logoutHandler} 
            baseUrl={baseUrl}/>}
>>>>>>> lastChanges
        />
        <Route
          exact
          path="/editTrip/:id"
          logged={loggedIn}
<<<<<<< HEAD
          element={<TripEditor baseUrl={baseUrl} logged={loggedIn} onLogout={logoutHandler}/>}
=======
          element={<TripEditor 
            logged={loggedIn} 
          onLogout={logoutHandler} 
          baseUrl={baseUrl}/>}
>>>>>>> lastChanges
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
