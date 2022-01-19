//for adding trips
import React from 'react';
import Api from '../../services/Api';
import Header from '../structure/Header';
import Footer from '../structure/Footer';
import TripForm from './TripForm';
import TripList from './TripList';
import '../styles.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

//for testing
import useLocalStorage from '../../hooks/useLocalStorage';

const TripAdder = ({history}) =>{
    
    const [trips, setTrips] = useLocalStorage('trips', []);

    const handleOnSubmit = (trip) => {
        //console.log(trip);
        setTrips([...trips, trip]);
        history.push('/');
      };

    return(
        <React.Fragment>,
        <Header/>,
        <TripList trips={trips} setTrips={setTrips}/>,
        <TripForm handleOnSubmit={handleOnSubmit}/>,
        <Footer/>,
        </React.Fragment>
    );

}

export default TripAdder;