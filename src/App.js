import "./components/styles.css";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Structure/Header";
import React from "react";
import MyMap from "./components/Map/MyMap";
function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <h3>
          Jetzt einloggen und deine Reisen <br />
          ganz einfach über deine individuelle Reisekarte verwalten.
        </h3>
        <LoginForm />
        <MyMap/>
      </main>
      <footer>© 2021</footer>
    </div>
  );
}

export default App;
