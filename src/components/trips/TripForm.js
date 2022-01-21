import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "../styles.css";
import Moment from "moment";
import DropdownCountries from "./DropdownCountries";

const TripForm = (props) => {
  var isEditForm = props.isEditForm;

  if (props.trip != null) {
    console.log("props.trip: " + props.trip.name);
  }

  const [trip, setTrip] = useState({
    name: props.trip ? props.trip.name : "",
    start: props.trip ? props.trip.start : "",
    end: props.trip ? props.trip.end : "",
    country: props.trip ? props.trip.country : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { name, start, end, country } = trip;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, start, end, country];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const trip = {
        id: uuidv4(),
        name,
        start: formatDate(start),
        end: formatDate(end),
        country,
      };
      props.handleOnSubmit(trip);
    } else {
      errorMsg = "Bitte alle Felder ausfüllen.";
    }
    setErrorMsg(errorMsg);
  };

  function formatDate(date) {
    return Moment.utc(date).format("YYYY-MM-DD");
  }

  const handleInputChange = (event) => {
    const { key, value } = event.target;
    setTrip((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    console.log(event.target);
  };

  const [selected, setSelected] = useState("Germany");
  const countrySelectedHandler = (country) => {
    setSelected(country);
    console.log(country);
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Reisename: </Form.Label>
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
          <Form.Label>Startdatum: </Form.Label>
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
          <Form.Label>Enddatum: </Form.Label>
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
          <Form.Label>Reiseziel: </Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="country"
            value={country}
            placeholder="Reiseland eingeben"
            onChange={handleInputChange}
          />
        </Form.Group>
        {isEditForm ? (
          <Button variant="primary" type="submit" className="submit-btn">
            Änderungen speichern{" "}
          </Button>
        ) : (
          <Button variant="primary" type="submit" className="submit-btn">
            Hinzufügen
          </Button>
        )}
      </Form>
    </div>
  );
};

export default TripForm;

/*          <DropdownCountries
            selected={selected}
            onCountrySelect={countrySelectedHandler}
            onChange={handleInputChange}
          />*/