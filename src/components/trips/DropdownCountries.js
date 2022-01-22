import React, { useState } from "react";
import "./DropdownCountries.css";
import mapData from "../../data/mapData.json";
import { useTranslation, Trans } from 'react-i18next';

const DropdownCountries = (props) =>{

  const { t } = useTranslation();

  const changeCountryHandler = (select) =>{
    props.onSelect(select);
  }

  let dropdownContent = <option>No Countries Loaded</option>;
  
  if(mapData.features.length > 0){
    dropdownContent = mapData.features.map((feature) =>(
      <option>{feature.properties.name}</option>
    ));
    dropdownContent.unshift(<option>{t('description.dropdownCountry')}</option>)
  }
    return(
        <div className='dropdown-countries'>
        <div className='dropdown-countries__control'>
          <label>{t('description.country')} </label>
          <select name="country" value={props.selected} onChange={changeCountryHandler}>
            {dropdownContent}
          </select>
        </div>
      </div>
    );
}
export default DropdownCountries;