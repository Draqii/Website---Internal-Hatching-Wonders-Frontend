import React from "react";
import { setClass } from "../../modules/setClass";
import { NotFoundProps } from "./NotFound.types";
import texts from "./NotFound.json"
import "./NotFound.scss";

const NotFound = ({language, theme, className}: NotFoundProps) => {

    return (
        <div className={setClass("hw_notfound", [theme], className)}>
            notfound
        </div>
    )
}

export default NotFound
