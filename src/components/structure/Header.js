import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles.css';
import image from '../../images/globe.png'

const Header = (props) => {

    const logout = () =>{
        props.onLogout();
    }
    return (
        <header className="after-login">
            <div className="menu-container">
                <img className="logo" src={image}/>
                <h2><NavLink to={'/map'} >Deine Reisekarte ins Nirwana</NavLink></h2>
                <nav className="menu">
                    <ul>
                        <li><NavLink to={'/map'} >Karte</NavLink></li>
                        <li><NavLink to={'/addTrip'}>Reise hinzufügen</NavLink></li>
                        <li><NavLink to={'/editTrip'}>Reise bearbeiten</NavLink></li>
                        <li><NavLink to={'/'} onClick={logout} >Logout </NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
//<li><NavLink to={'/map'}>Karte</NavLink></li>