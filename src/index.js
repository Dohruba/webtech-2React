import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './components/LoginPage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import TripEditor from './components/TripEditor';
import TripAdder from './components/TripAdder';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route exact path="/map" component={Map}/>
    <Route exact path="/addTrip" component={TripAdder}/>
    <Route exact path="/editTrip" component={TripEditor}/>
    <Route exact path="/login" component={LoginPage}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
