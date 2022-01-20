import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../styles.css';
import { useNavigate } from 'react-router';

const Trip = ({
  id,
  tripname,
  start,
  end,
  country,
  handleRemoveTrip
}) => {
  let navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }} className="trip">
      <Card.Body>
        <Card.Title className="trip-title">{tripname}</Card.Title>
        <div className="trip-details">
          <div>Reisename: {tripname}</div>
          <div>Startdatum: {new Date(start).toDateString()} </div>
          <div>Enddatum: {new Date(end).toDateString()} </div>
          <div>Reiseziel: {country}</div>
        </div>
        <Button variant="primary" onClick={() => navigate(`/editTrip/${id}`)}>
          Bearbeiten
          </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveTrip(id)}>
          Löschen
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Trip;