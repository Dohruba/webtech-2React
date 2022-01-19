import React, { useState } from "react";
import './styles.css';

const LoginForm = () =>{

    const [enteredMail, setEnteredMail] = useState('');
    const [enteredPass, setEnteredPass] = useState('');

    const mailChangeHandler = (event) =>{
        setEnteredMail(event.target.value);
        console.log(event.target.value);
    }
    const passChangeHandler = (event) =>{
        setEnteredPass(event.target.value);
        console.log(event.target.value);
    }
    const clickHandler = () =>{
        if(enteredMail == 'a@b.com' && enteredPass == 'b'){
            console.log('PasswordCorrect');
        }
        console.log('PasswordCorrect');
    }

    return <form className="login">
        <label htmlFor="email" >E-Mail</label>
        <input type="email" id="email" onChange={mailChangeHandler}/>
        <br/>
        <label htmlFor="password" >Passwort</label>
        <input type="password" id="pw" onChange={passChangeHandler}/>
        <div>
            <button type="submit" className="loginBtn" onClick={clickHandler}> Jetzt einloggen</button>
        </div>
    </form>
}
export default LoginForm;