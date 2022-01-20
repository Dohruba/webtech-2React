import "./components/styles.css";
import "./App.css";
import LoginForm, {logConfirmation} from "./components/LoginForm";
import Header from "./components/Structure/Header";
import React, { useState } from "react";
import MyMap from "./components/Map/MyMap";
function App() {
/*
Tener aqui un boolean LoggedIn
al cual el formulario le hable :D
y desde aqui pasárselo a los otros componentes
*/
const [loggedIn, setLoggedIn] = useState();
const loginTriedHandler = result =>{
  setLoggedIn(result);
  console.log("Login: " + result);
}

  return (
    <div className="container">
      <Header />
      <main>
        <h3>
          Jetzt einloggen und deine Reisen <br />
          ganz einfach über deine individuelle Reisekarte verwalten.
        </h3>
        <LoginForm onTryLogin={loginTriedHandler} logged={loggedIn}/>
        <MyMap loginState={loggedIn}/>

      </main>
      <footer>© 2021</footer>
    </div>
  );
}

export default App;
