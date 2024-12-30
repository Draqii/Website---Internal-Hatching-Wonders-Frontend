import React from "react";
import { setClass } from "../../modules/setClass";
import { CheckboxProps } from "./Checkbox.types";
import { Icon } from "da-awesome-library/build";
import Checkmark from "../../../public/svg/checkmark.svg"
import "./Checkbox.scss";

const Checkbox = ({checked, label, isDisabled, onChange, theme, className}: CheckboxProps) => {

    return (
        <div className={setClass("ihw_checkbox", [theme, isDisabled?"disabled":""], className)}>
            {checked ? <Icon onClick={() => onChange()} className="ihw_checkbox__icon" ReactSVG={Checkmark} /> : null}
            <input 
                checked={checked}
                type="checkbox" 
                className="ihw_checkbox__input"
                onChange={() => onChange()}
                onKeyDown={(e) => e.key === "Enter" ? onChange() : null}
                disabled={isDisabled}
            />
            <p className="ihw_checkbox__label"> {label} </p>
        </div>
    )
}

export default Checkbox
