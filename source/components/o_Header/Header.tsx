import React from "react";
import { NavLink } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { HeaderProps } from "./Header.types";
import texts from "./Header.json"
import "./Header.scss";

const Header = ({language, theme, className}: HeaderProps) => {

    return (
        <div className={setClass("hw_header", [theme], className)}>
            <div className="hw_header__links">
                <NavLink className={"hw_header__link"} to="/" children="Home"/>
                <NavLink className={"hw_header__link"} to="/clocking" children="Clocking" />
                <NavLink className={"hw_header__link"} to="/newsletter" children="Newsletter" />
            </div>
        </div>
    )
}

export default Header
