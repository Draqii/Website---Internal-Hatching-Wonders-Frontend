import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { LogoutProps } from "./Logout.types";
import { Button, Heading } from "da-awesome-library/build";
import "./Logout.scss";
import { setItem } from "../../modules/hooks/useCookie";

const Logout = ({setLoggedIn, theme, className}: LogoutProps) => {

    useEffect(() => {
        document.title = "Log Out - Internal Hatching Wonders"
    }, [])

    const _logout = () => {
        setLoggedIn(false)
        setItem("hw_login", "no", 1)
    }

    return (
        <div className={setClass("hw_logout hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Log Out"} />
            <Button onClick={() => {_logout()}} content={"Log Out"} />
        </div>
    )
}

export default Logout
