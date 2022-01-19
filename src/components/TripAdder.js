//for adding trips
import React from 'react';
import Api from '../services/Api';
import Header from './structure/Header';
import Footer from './structure/Footer';
import TripForm from './TripForm';
import TripList from './TripList';

const TripAdder = () =>{

    const handleOnSubmit = (trip) => {
        console.log(trip);
      };

    return(
        <Header/>,
        <React.Fragment>,
        <TripList/>,
        <TripForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>,
        <Footer/>
    );

}

export default TripAdder;