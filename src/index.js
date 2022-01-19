import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import LoginPage from './components/LoginPage';
import TripEditor from './components/TripEditor';
import TripAdder from './components/TripAdder';
import Map from './components/Map';
import Header from "./components/structure/Header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route exact path="/map" element={<Map/>}/>
    <Route exact path="/addTrip" element={<TripAdder/>}/>
    <Route exact path="/editTrip" element={<TripEditor/>}/>
    <Route exact path="/login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
