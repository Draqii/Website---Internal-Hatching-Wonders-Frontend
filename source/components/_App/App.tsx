import React from "react";
import { setClass } from "../../modules/setClass";
import Header from "../o_Header/Header";
import Router from "../_Router/Router";
import "./App.scss";

const App = ({}: any) => {

    return (
        <div className={setClass("hw_page", [])}>
            <Header />
            <Router 
                cookieConsent={undefined} 
                onConsentChange={undefined} />
        </div>
    )
}

export default App