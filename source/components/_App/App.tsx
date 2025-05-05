import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import Header from "../o_Header/Header";
import Router from "../_Router/Router";
import Login from "../o_Login/Login";
import useCookie from "../../modules/hooks/useCookie";
import "./App.scss";

const App = ({}: any) => {

    const [loggedIn, setLoggedIn] = useState(useCookie("hw_login", "default")[0])

    return (
        <div className={setClass("hw_page", [])}>
            <Header loggedIn={loggedIn !== "default" && loggedIn !== "none"} />
            {loggedIn !== "default" && loggedIn !== "none"? <Router 
                cookieConsent={undefined} 
                onConsentChange={undefined} /> : <Login loggedIn={loggedIn !== "default" && loggedIn !== "none"} setLoggedIn={setLoggedIn} />}
        </div>
    )
}

export default App