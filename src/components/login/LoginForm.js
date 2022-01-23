import React, { useState } from "react";
import "../styles.css";
import { useNavigate } from 'react-router';
import logo from '../../images/globe.png';

import { useTranslation} from 'react-i18next';

const LoginForm = (props) => {
<<<<<<< HEAD

  const BASE_URL = props.baseUrl;

  let navigate = useNavigate();
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [logged, setLogged] = useState(false);
=======
  let navigate = useNavigate();
  //connect Frontend to Backend
  //const BASE_URL = "https://travelsitebackend.herokuapp.com";
  
  const { t } = useTranslation();

  const BASE_URL = props.baseUrl;
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
>>>>>>> lastChanges

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };
  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };

  const clickHandler = () => {
    var mail = enteredMail;
    var password = enteredPass;
    var tableData = {
      email: mail,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tableData),
    };
    fetch(`${BASE_URL}/login`, requestOptions)
      .then((response) => response.json())
        .then((res) => {
          if (res.status === "200") {
            props.onTryLogin(true);
            navigate('/map');
            return true;
          } else {
            props.onTryLogin(false);
            return false;
          }
        });
  };

  return (
    <div className="container">
      <header className="index-header">
            <div className="header-container-index">
                <img className="logo" alt="Logo" src={logo}/>
                <h1 className="index-title">{t('header.title')}</h1>
            </div>
        </header>
        <main>
            <h3>
              {t('loginForm.welcome1')}
              <br/>
              {t('loginForm.welcome2')}
            </h3>
    <div className="login" >
      <label htmlFor="email">E-Mail</label>
      <input type="email" id="email" value={enteredMail} onChange={mailChangeHandler} />
      <br />
      <label htmlFor="password">{t('loginForm.password')}</label>
      <input type="password" id="pw" onChange={passChangeHandler} />
      <div>
        <button type="submit" className="loginBtn" value={enteredPass} onClick={clickHandler}>
          {" "}
          {t('loginForm.button')}
        </button>
      </div>
    </div>
    </main>
        <footer>
            © 2021
        </footer>
    </div>
  );
};
export default LoginForm;