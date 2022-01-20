import "./components/styles.css";
import "./App.css";
import LoginForm, { logConfirmation } from "./components/LoginForm";
import Header from "./components/Structure/Header";
import React, { useState } from "react";
import MyMap from "./components/Map/MyMap";

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const loginTriedHandler = (result) => {
    setLoggedIn(result);
    console.log("Login: " + result);
  };

  let mainContent = <p>Not logged in yet</p>;
  if (loggedIn) {
    mainContent = <MyMap loginState={loggedIn} />;
  } else {
    mainContent = (
      <div>
        <h3>
          Jetzt einloggen und deine Reisen <br />
          ganz einfach über deine individuelle Reisekarte verwalten.
        </h3>
        <LoginForm onTryLogin={loginTriedHandler} logged={loggedIn} />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <main>{mainContent}</main>
      <footer>© 2021</footer>
    </div>
  );
}

export default App;
