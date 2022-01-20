//for adding trips
import React from 'react';
import Api from '../../services/Api';
import TripForm from './TripForm';
import TripList from './TripList';
import '../styles.css';

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
        <TripList trips={trips} setTrips={setTrips}/>,
        <TripForm handleOnSubmit={handleOnSubmit}/>,
        </React.Fragment>
    );

}

export default TripAdder;