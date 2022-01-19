import './components/styles.css';
import logo from './images/globe.png';
import LoginForm from './components/login/LoginForm';
import React from 'react';

function App() {
  return (
    <div className="container">
      <header className="index-header">
            <div className="header-container-index">
                <img className="logo" src={logo}/>
                <h1 className="index-title">Deine Reisekarte ins Nirwana</h1>
            </div>
        </header>
        <main>
            <h3>
                Jetzt einloggen 
                und deine Reisen <br/>
                ganz einfach
                über deine individuelle Reisekarte 
                verwalten.
            </h3>
            <LoginForm/>
            </main>
        <footer>
            © 2021
        </footer>
    </div>
  );
}

export default App;
