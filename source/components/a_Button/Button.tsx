import React from "react";
import { setClass } from "../../modules/setClass";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({children, isDisabled, onClick, theme, className}: ButtonProps) => {

    const _onClick = (e) => {
        e.preventDefault()
        if (!isDisabled) onClick()
    }

    return (
        <input 
            type="button" 
            className={setClass("ihw_button", [theme, isDisabled?"disabled":""], className)}
            onClick={_onClick}
            value={children}
            disabled={isDisabled}
        />
    )
}

export default Button
