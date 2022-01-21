import React, { useEffect, useState } from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import '../styles.css';
import Moment from 'moment';
import DropdownCountries from './DropdownCountries';

const TripForm = (props) => {

  var isEditForm = props.isEditForm;

  const [trip, setTrip] = useState( {
    name: '',
    start: '',
    end: '',
    country: ''});

  const updateTrip = () => {
    // console.log("props.trip.country: "+props.trip.country);
    const tripToEdit = {
    name: props.trip ? props.trip.name : '',
    start: props.trip ? props.trip.start : '',
    end: props.trip ? props.trip.end : '',
    country: props.trip ? props.trip.country : '',
    }
    setTrip(tripToEdit);
  }

  useEffect(()=>{
    let mounted = true;
    if(mounted){
    updateTrip();}
    updateTrip();
    }
    return() => mounted = false;
  },[]);

  const [errorMsg, setErrorMsg] = useState('');
  const { name, start, end, country } = trip;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, start, end, country];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });


    if (allFieldsFilled) {
      const trip = {
        id: uuidv4(),
        name,
        start: formatDate(start),
        end: formatDate(end),
        country
      };
      props.handleOnSubmit(trip);
      
      setTrip({
        name: '',
        start: '',
        end: '',
        country: ''});

    } else {
      errorMsg = 'Bitte alle Felder ausfüllen.';
    }
    setErrorMsg(errorMsg);
  };

  function formatDate(date){
    return Moment.utc(date).format("YYYY-MM-DD");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrip((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // const [selected, setSelected] = useState('');
  // const countrySelectedHandler = (country) =>{
  //   setSelected(country);
  //   console.log("country"+country);

  // }

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group  className="input-control" controlId="name">
          <Form.Label>Reisename: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            placeholder="Reisenamen eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="input-control" controlId="start">
          <Form.Label>Startdatum: </Form.Label>
          <Form.Control
            type="date"
            name="start"
            value={start}
            placeholder="Startdatum eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="input-control" controlId="end">
          <Form.Label>Enddatum: </Form.Label>
          <Form.Control
            type="date"
            name="end"
            value={end}
            placeholder="Enddatum eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="input-control" controlId="country">
        <Row>
          <Col>
          <Form.Label>Reiseziel: </Form.Label>
          </Col>
          <Col>
          <DropdownCountries selected={trip.country} name="country"
          onSelect={handleInputChange}/>
          </Col>
        </Row>
        </Form.Group>
        {isEditForm 
        ? <Button variant="primary" type="submit" className="submit-btn">
        Änderungen speichern </Button>
        : <Button variant="primary" type="submit" className="submit-btn">
        Hinzufügen
        </Button>}
        
      </Form>
    </div>
  );
};

export default TripForm;