import React, { useState } from "react";
import "./styles.css";

const LoginForm = () => {
  //connect Frontend to Backend
  //const BASE_URL = "https://travelsitebackend.herokuapp.com";

  const BASE_URL = "http://localhost:5000";
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
    console.log(event);
  };
  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
    console.log(event.target.value);
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
          return res;
        });
      // console.log(response);
      if (response.status == 200) {
        //window.location.replace("map.html");
        alert("Password Correct");
      } else {
        alert("Fehler beim Login: " + response.status);
      }
    };
    tryLogin();
  };

  return (
    <form className="login">
      <label htmlFor="email">E-Mail</label>
      <input type="email" id="email" onChange={mailChangeHandler} />
      <br />
      <label htmlFor="password">Passwort</label>
      <input type="password" id="pw" onChange={passChangeHandler} />
      <div>
        <button type="submit" className="loginBtn" onClick={clickHandler}>
          {" "}
          Jetzt einloggen
        </button>
      </div>
    </form>
  );
};
export default LoginForm;