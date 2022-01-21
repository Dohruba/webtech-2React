import React, {useState, useEffect} from 'react';
import { Button, Card } from 'react-bootstrap';
import '../styles.css';
import { useNavigate } from 'react-router';
import Moment from 'moment';

const Trip = ({
  trip_id,
  name,
  start,
  end,
  country,
  handleRemoveTrip
}) => {
  let navigate = useNavigate();

  const path = window.location.pathname;
  const [pathChanged, setPathChanged] = useState('');

  useEffect(()=>{
    let mounted = true;
    if(mounted){
      if(path==='/addTrip'){
        setPathChanged(false);
      }else{
        setPathChanged(true);
      }
    }
    return() => mounted = false;
  },[])

  function formatDate(date){
    return Moment.utc(date).format("DD.MM.YYYY");
  }

  return (
    <Card className="trip">
      <Card.Body>
        <div className="trip-details">
          <div>Reisename: {name}</div>
          <div>Startdatum: {formatDate(new Date(start))} </div>
          <div>Enddatum: {formatDate(new Date(end))} </div>
          <div>Reiseziel: {country}</div>
        </div>
        {pathChanged
        ? <div>
        <Button variant="primary" onClick={() => navigate(`/editTrip/${trip_id}`)}>
          Bearbeiten
          </Button>
        <Button variant="danger" onClick={() => handleRemoveTrip(trip_id)}>
          Löschen
        </Button>
        </div>
        : null}
      </Card.Body>
    </Card>
  );
};

export default Trip;