import React, {useState, useEffect} from 'react';
import { Button, Card } from 'react-bootstrap';
import '../styles.css';
import { useNavigate } from 'react-router';
import Moment from 'moment';

import { useTranslation} from 'react-i18next';

const Trip = ({
  trip_id,
  name,
  start,
  end,
  country,
  handleRemoveTrip
}) => {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const path = window.location.pathname;
  const [pathChanged, setPathChanged] = useState('');

  useEffect(()=>{
    let mounted = true;
    if(mounted){
      if(path==='/addTrip' || path==='/map'){
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
    <Card>
      <Card.Body>
        <div className="trip-details">
          <div>
            {t('description.tripname')}
            {name}
            </div>
          <div>{t('description.start')} {formatDate(new Date(start))} </div>
          <div>{t('description.end')} {formatDate(new Date(end))} </div>
          <div>{t('description.country')}  {country}</div>
        </div>
        {pathChanged
        ? <div>
        <Button variant="primary" onClick={() => navigate(`/editTrip/${trip_id}`)}>
        {t('description.editBtn')}
          </Button>
        <Button variant="danger" onClick={() => handleRemoveTrip(trip_id)}>
        {t('description.delBtn')}
        </Button>
        </div>
        : null}
      </Card.Body>
    </Card>
  );
};

export default Trip;