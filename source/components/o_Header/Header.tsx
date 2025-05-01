import React from "react";
import { NavLink } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { HeaderProps } from "./Header.types";
import { Paragraph } from "da-awesome-library/build";
import texts from "./Header.json"
import "./Header.scss";

const Header = ({loggedIn, language, theme, className}: HeaderProps) => {

    return (
        <div className={setClass("hw_header", [theme], className)}>
            {loggedIn ? <div className="hw_header__links">
                <NavLink className={"hw_header__link"} to="/" children="Home"/>
                <NavLink className={"hw_header__link"} to="/clocking" children="Clocking" />
                <NavLink className={"hw_header__link"} to="/employees" children="Employees" />
                <NavLink className={"hw_header__link"} to="/newsletter" children="Newsletter" />
            </div> : <Paragraph className="hw_header__text" size={"small"} children={"You must be logged in to use this website!"} theme={"dark"} />}
        </div>
    )
}

export default Header
