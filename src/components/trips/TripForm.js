import React, { useEffect, useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import '../styles.css';
import Moment from 'moment';
import DropdownCountries from './DropdownCountries';

import { useTranslation, Trans } from 'react-i18next';

const TripForm = (props) => {

  const { t } = useTranslation();

  var isEditForm = props.isEditForm;

  const [trip, setTrip] = useState( {
    name: '',
    start: '',
    end: '',
    country: ''});

  const updateTrip = () => {
    const tripToEdit = {
    name: props.trip ? props.trip.name : '',
    start: props.trip ? props.trip.start : '',
    end: props.trip ? props.trip.end : '',
    country: props.trip ? props.trip.country : '',
    }
    // console.log(props);
    setTrip(tripToEdit);
  }

  useEffect(()=>{
    let mounted = true;
    if(mounted){
    updateTrip();}
    return() => mounted = false;
  },[props]);

  const [errorMsg, setErrorMsg] = useState('');
  const { name, start, end, country } = trip;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, start, end, country];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0' && value !== "{t('description.dropdownCountry')}" ;
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
 //{t('description.addAlert')}
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


  if(trip.country.length == 0){
    trip.country = "{t('description.dropdownCountry')}";
  }
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{t('description.addAlert')}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label> {t('description.tripname')} </Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Reisenamen eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="start">
          <Form.Label> {t('description.start')} </Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="start"
            value={start}
            placeholder="Startdatum eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="end">
          <Form.Label> {t('description.end')} </Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="end"
            value={end}
            placeholder="Enddatum eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <DropdownCountries selected={trip.country} name="country"
          onSelect={handleInputChange}/>
        </Form.Group>
        {isEditForm 
        ? <Button variant="primary" type="submit" className="submit-btn">
         {t('description.submitBtn')} </Button>
        : <Button variant="primary" type="submit" className="submit-btn">
        {t('description.addBtn')}
        </Button>}
        
      </Form>
    </div>
  );
};

export default TripForm;