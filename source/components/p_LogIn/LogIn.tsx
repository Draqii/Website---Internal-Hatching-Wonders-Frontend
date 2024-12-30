import React, { useEffect } from "react";
import {setClass} from "../../modules/setClass";
import {LogInProps} from "./LogIn.types";
import "./LogIn.scss";
import LoginForm from "../m_LoginForm/LoginForm";
import Paragraph from "../a_Paragraph/Paragraph";
import Heading from "../a_Heading/Heading";

const LogIn = ({loggedIn, setLoggedIn, theme, className}: LogInProps) => {

    useEffect(() => {
        document.title = "Log In - Internal Hatching Wonders"
    }, [])

    return (
        <div className={setClass("ihw_loginpage hw_route", [theme], className)}>
            <Heading className="ihw_loginpage__title" theme={theme} children={"Please Log In"} size={"large"} />
            <Paragraph className="ihw_loginpage__text" theme={theme} children={"Welcome back! Some actions only work while you're logged into your account. Please log back in!"} size={"medium"} />
            <LoginForm className="ihw_loginpage__form" theme={theme} alwaysExpanded={true} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default LogIn
