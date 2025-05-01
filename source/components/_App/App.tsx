import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import Header from "../o_Header/Header";
import Router from "../_Router/Router";
import Login from "../o_Login/Login";
import "./App.scss";

const App = ({}: any) => {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className={setClass("hw_page", [])}>
            <Header loggedIn={loggedIn} />
            {loggedIn ? <Router 
                cookieConsent={undefined} 
                onConsentChange={undefined} /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        </div>
    )
}

export default App