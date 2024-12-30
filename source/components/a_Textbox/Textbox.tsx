import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { TextboxProps } from "./Textbox.types";
import Pen from "../../../public/svg/pen.svg"
import Close from "../../../public/svg/close.svg"
import Attention from "../../../public/svg/attention.svg"
import Icon from "../a_Icon/Icon";
import "./Textbox.scss";

const Textbox = ({isPassword, submitCount, submit, value, onChange, autoComplete, minimumCharacters, placeholder, isDisabled, theme, className}: TextboxProps) => {

    const [showPlaceholder, setShowPlaceholder] = useState(false)
    const [errors, setErrors] = useState([])

    const onValueChange = (value) => {
        onChange(value)
    }

    const onValueSubmit = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            submit()
        }
    }

    const checkIfHasErrors = () => {
        const _errors = []
        if (!minimumCharacters) return
        if (value.length < minimumCharacters) _errors.push("You need to enter atleast "+minimumCharacters+" characters.")
        setErrors(_errors)
    }

    const checkIfTreatedAsPlaceholder = () => {
        setShowPlaceholder(value === "")
    }

    useEffect(() => {
        checkIfTreatedAsPlaceholder()
        if(submitCount > 0) checkIfHasErrors()
    }, [value, submitCount])

    useEffect(() => {
        if (isDisabled) onValueChange("")
    }, [isDisabled])

    return (
        <div className={setClass("ihw_textbox", [theme, isDisabled?"disabled":"", showPlaceholder && !isDisabled?"placeholder":null, errors.length>0?"errors":""], className)}>
            <div className="ihw_textbox__main">
                <div className="ihw_textbox__icons">
                    <Icon className="ihw_textbox__icon ihw_textbox__icon_pen" theme={theme} ReactSVG={Pen} />
                    {isDisabled ? <Icon className="ihw_textbox__icon ihw_textbox__icon_close" theme={theme} ReactSVG={Close} /> : null}
                    {errors.length > 0 ? <Icon className="ihw_textbox__icon ihw_textbox__icon_attention" theme={theme} ReactSVG={Attention} /> : null}
                </div>
                <input 
                    onKeyDown={onValueSubmit}
                    autoComplete={autoComplete ? autoComplete : "off"}
                    disabled={isDisabled}
                    placeholder={placeholder} 
                    onChange={(e) => onValueChange(e.target.value)} 
                    value={isDisabled ? "" : value} 
                    className="ihw_textbox__input" 
                    type={isPassword ? "password" : "text"} 
                />
            </div>
            {errors.length > 0 ? <div className="ihw_textbox__errors">
                {errors.map((error) => <div className="ihw_textbox__error">
                    <Icon className="ihw_textbox__icon ihw_textbox__icon_attention" theme={theme} ReactSVG={Attention} /> 
                    <p className="ihw_textbox__error_text"> {error} </p>
                </div>)}
            </div>
            : null}
        </div>
    )
}

export default Textbox
