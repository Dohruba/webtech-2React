import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles.css';
import image from '../../images/globe.png'
import { useTranslation} from 'react-i18next';

const Header = (props) => {

    const { t } = useTranslation();
    const logout = () =>{
        props.onLogout();
    }
    return (
        <header className="after-login">
            <div className="menu-container">
                <img className="logo" alt='Logo' src={image}/>
                <h2><NavLink to={'/map'} >{t('header.title')}</NavLink></h2>
                <nav className="menu">
                    <ul>
                        <li><NavLink to={'/map'} >{t('header.button1')}</NavLink></li>
                        <li><NavLink to={'/addTrip'}>{t('header.button2')}</NavLink></li>
                        <li><NavLink to={'/editTrip'}>{t('header.button3')}</NavLink></li>
                        <li><NavLink to={'/'} onClick={logout} >{t('header.button4')} </NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
//<li><NavLink to={'/map'}>Karte</NavLink></li>