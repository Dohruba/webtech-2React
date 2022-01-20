import React, { useState } from "react";
import "../styles.css";
import { useNavigate } from 'react-router';
import logo from '../../images/globe.png';

const LoginForm = (props) => {
  let navigate = useNavigate();
  //connect Frontend to Backend
  //const BASE_URL = "https://travelsitebackend.herokuapp.com";

  const BASE_URL = "http://localhost:5000";
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [logged, setLogged] = useState(false);

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
    //console.log(event);
  };
  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
    //console.log(event.target.value);
  };

  const clickHandler = () => {
    var mail = enteredMail;
    var password = enteredPass;
    var tableData = {
      email: mail,
      password: password,
    };
    const tryLogin = async () => {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tableData),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.status == 200) {
            console.log("alles cool! ");
            setLogged(true);
            props.onTryLogin(true);
            navigate('/map');
            return true;   
          } else {
            setLogged(false);
            props.onTryLogin(false);
            return false;
          }
        });
    };
    tryLogin();
  };

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
    <form className="login" >
      <label htmlFor="email">E-Mail</label>
      <input type="email" id="email" value={enteredMail} onChange={mailChangeHandler} />
      <br />
      <label htmlFor="password">Passwort</label>
      <input type="password" id="pw" onChange={passChangeHandler} />
      <div>
        <button type="submit" className="loginBtn" value={enteredPass} onClick={clickHandler}>
          {" "}
          Jetzt einloggen
        </button>
      </div>
    </form>
    </main>
        <footer>
            © 2021
        </footer>
    </div>
  );
};
export default LoginForm;