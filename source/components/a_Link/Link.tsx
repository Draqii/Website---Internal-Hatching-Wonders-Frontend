import React from "react";
import { setClass } from "../../modules/setClass";
import { LinkProps } from "./Link.types";
import { Link as ReactLink } from "react-router-dom";
import "./Link.scss";

const Link = ({target, href, isInternal, children, theme, className}: LinkProps) => {

    return (
        <ReactLink target={target} to={href} className={setClass("ihw_link", [theme, isInternal?"internal":"external"], className)}>
            {children}
        </ReactLink>
    )
}

export default Link
