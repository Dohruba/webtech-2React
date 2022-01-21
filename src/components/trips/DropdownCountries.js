import React, { useState } from "react";
import "./DropdownCountries.css";
import mapData from "../../data/mapData.json";

const DropdownCountries = (props) =>{

  const changeCountryHandler = (select) =>{
    props.onCountrySelect(select.target.value);
  }

  let dropdownContent = <option>No Countries Loaded</option>;
  
  if(mapData.features.length > 0){
    dropdownContent = mapData.features.map((feature) =>(
      <option>{feature.properties.name}</option>
    ));
  }
    return(
        <div className='dropdown-countries'>
        <div className='dropdown-countries__control'>
          <select value={props.selected} onChange={changeCountryHandler}>
            {dropdownContent}
          </select>
        </div>
      </div>
    );
}
export default DropdownCountries;