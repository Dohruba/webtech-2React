//for editing and deleting trips

import Api from "../../services/Api";
import Header from "../structure/Header";
import Footer from "../structure/Footer";
import '../styles.css';
import React, { useState } from "react";

function TripEditor(){

    //connect Frontend to Backend
    // const BASE_URL = "https://travelsitebackend.herokuapp.com";
    const BASE_URL = "http://localhost:5000";
    let dataArray = [];
    var arrayLength = 0;

    return(
        <Header/>,
        <div>
        <h2>Meine Reisen: </h2>
            <div id="btnWrapper">
            <table class="triptable">
                <thead>
                <tr>
                  <th>Reisename</th>
                  <th>Anfang</th>
                  <th>Ende</th>
                  <th>Reiseland</th>
                </tr>
                </thead>
            <tbody>
            </tbody>
            </table>
            </div>
        </div>,
        <Footer/>
    );



    /*
    //Ricardos Part to activate later

    //Geojson sind die Polygone (Schatten auf den Map)
    const loadData = async () => {
    const data = await fetch(
        "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson"
      );
      return data.json();
    };
    //for dropdown of trips
    const getNames = async () => {
        const geoJson = await loadData();
        geoJson.features.forEach(loadNames);
      };
    
      function loadNames(item) {
        //console.log(item.properties.name);
        let dropDownMenu = document.querySelector(".dropdown");
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(item.properties.name));
        dropDownMenu.append(option);
      }
    */
}

export default TripEditor;