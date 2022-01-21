import React, {useState, useEffect} from 'react';
import { Button, Card } from 'react-bootstrap';
import '../styles.css';
import { useNavigate } from 'react-router';

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
  // let editPath = false;
  const [pathChanged, setPathChanged] = useState('');

  useEffect(()=>{
    let mounted = true;
    if(mounted){
      console.log("useEff.trip.mounted: "+mounted);
      if(path==='/editTrip'){
        setPathChanged(false);
      }else{
        setPathChanged(true);
      }
    }
    return() => mounted = false;
  },[])

  return (
    <Card className="trip">
      <Card.Body>
        <div className="trip-details">
          <div>Reisename: {name}</div>
          <div>Startdatum: {new Date(start).toDateString()} </div>
          <div>Enddatum: {new Date(end).toDateString()} </div>
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