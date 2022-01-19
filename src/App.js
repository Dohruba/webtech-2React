import './components/styles.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import React from 'react';

function App() {
  return (
    <div className="container">
        <Header/>
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
