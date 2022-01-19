import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const TripForm = (props) => {

  const [trip, setTrip] = useState({
    tripname: props.trip ? props.trip.tripname : '',
    start: props.trip ? props.trip.start : '',
    end: props.trip ? props.trip.end : '',
    country: props.trip ? props.trip.country : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { tripname, start, end, country } = trip;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [tripname, start, end, country];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const trip = {
        id: uuidv4(),
        tripname,
        start: new Date(),
        end: new Date(),
        country
      };
      props.handleOnSubmit(trip);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'country':
        if (value === '') {
          setTrip((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'end':
        if (value === '') {
          setTrip((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setTrip((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Trip Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="tripname"
            value={tripname}
            placeholder="Reisenamen eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="start">
          <Form.Label>trip start</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="start"
            value={start}
            placeholder="Startdatum eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="end">
          <Form.Label>end</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="end"
            value={end}
            placeholder="Enddatum eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="country"
            value={country}
            placeholder="Reiseland eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TripForm;