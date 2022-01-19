//for adding trips
import React from 'react';
import Api from '../services/Api';
import Header from './structure/Header';
import Footer from './structure/Footer';
import TripForm from './TripForm';
import TripList from './TripList';
import './styles.css';

const TripAdder = () =>{

    const handleOnSubmit = (trip) => {
        console.log(trip);
      };

    return(
        <React.Fragment>,
        <Header/>,
        <TripList/>,
        <TripForm handleOnSubmit={handleOnSubmit}/>,
        <Footer/>,
        </React.Fragment>
    );

}

export default TripAdder;