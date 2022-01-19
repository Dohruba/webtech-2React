import React from 'react';
import _ from 'lodash';
import Trip from './Trip';
import '../styles.css';

const TripList = ({ trips, setTrips }) => {
    const handleRemoveTrip = (id) => {
        setTrips(trips.filter((trip) => trip.id !== id));
      };

  return (
    <React.Fragment>
    <div className="trip-list">
      {!_.isEmpty(trips) ? (
        trips.map((trip) => (
          <Trip key={trip.id} {...trip} handleRemoveTrip={handleRemoveTrip} />
        ))
      ) : (
        <p className="message">Keine geplanten Reisen. </p>
      )}
    </div>
  </React.Fragment>
  )
};

export default TripList;
