import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles.css';
import image from '../../images/globe.png'

const Header = () => {
    return (
        <header className="after-login">
            <div className="menu-container">
                <img className="logo" src={image}/>
                <h2><a href="map.html">Deine Reisekarte ins Nirwana</a></h2>
                <nav className="menu">
                    <ul>
                        <li><NavLink to={'/map'}>Karte</NavLink></li>
                        <li><NavLink to={'/addTrip'}>Reise hinzufügen</NavLink></li>
                        <li><NavLink to={'/editTrip'}>Reise bearbeiten</NavLink></li>
                        <li><NavLink to={'/login'}>Logout</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;