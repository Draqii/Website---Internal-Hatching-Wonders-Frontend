import React from "react";
import { NavLink } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { HeaderProps } from "./Header.types";
import texts from "./Header.json"
import "./Header.scss";

const Header = ({language, theme, className}: HeaderProps) => {

    return (
        <div className={setClass("hw_header", [theme], className)}>
            <NavLink to="/" children="Home"/>
            <NavLink to="/newsletter" children="Newsletter" />
        </div>
    )
}

export default Header
