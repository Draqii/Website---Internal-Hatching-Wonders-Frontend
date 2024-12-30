import React from "react";
import {setClass} from "../../modules/setClass";
import {HeadingProps} from "./Heading.types";
import "./Heading.scss";

const Heading = ({children, size, theme, className}: HeadingProps) => {

    return (
        size === "teaser" ? <h1 className={setClass("ihw_heading", [theme, size], className)}>{children}</h1> :
        size === "large" ? <h2 className={setClass("ihw_heading", [theme, size], className)}>{children}</h2> :
        size === "medium" ? <h3 className={setClass("ihw_heading", [theme, size], className)}>{children}</h3> :
        size === "small" ? <h4 className={setClass("ihw_heading", [theme, size], className)}>{children}</h4> : null
    )
}

export default Heading
