import React, { useState, useEffect }  from 'react';

const BASE_URL = "http://localhost:5000";

function LoadTrips() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch(`${BASE_URL}/trips`, {
        method: "GET",
        credentials: "include",
      }).then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Warten bis Daten geladen sind...</div>;
    } else {
      return (
          
        // <ul className="test">
        //  {items.map(item => (
        //     <li>
        //       <li>{item.name} </li>
        //       <li>{item.start} </li>
        //       <li>{item.end} </li>
        //       <li>{item.country} </li>
        //     </li>
        //   ))} 
        // </ul>
      );
    }
  }

export default LoadTrips;