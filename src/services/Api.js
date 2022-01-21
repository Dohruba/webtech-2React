import { useState } from "react";
const BASE_URL = "http://localhost:5000";

class Api {
  
  /////////////////// Login /////////////////////////
  
  static async login(email, password) {
    const loginURL = `${BASE_URL}/login`;

    const response = await fetch(loginURL, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.status === 200;
  };

  /////////////////// Trips /////////////////////////

  static async getTrips(){
    // const [trips, setTrips] = useState([]);

    const response = await fetch(`${BASE_URL}/trips`, {
      method: "GET",
      credentials: "include",
    }).then((response) => response.json());
  }

  // var tableData = {
  //   name: name,
  //   start: start,
  //   end: end,
  //   country: country,
  // };

  static async addTrip(data) {
    const response = await fetch(`${BASE_URL}/trips`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data}),
    });
    // const reload = await location.reload();
    return response.status === 200;
  }

  static async updateTrip(tripToUpdate) {
    const response = await fetch(
      `${BASE_URL}/trips/` + tripToUpdate,
      {
        method: "PATCH",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripToUpdate),
      }
    );
    // const reload = await location.reload();
    return response.status === 200;
  };

  static async deleteTrip(tripToDelete) {
    const response = await fetch(
      `${BASE_URL}/trips/` + tripToDelete,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    // const reload = await window.location.reload();
  };
}

export default Api;