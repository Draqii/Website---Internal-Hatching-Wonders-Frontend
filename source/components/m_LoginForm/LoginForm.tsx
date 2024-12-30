import React, { useState } from "react";
import {setClass} from "../../modules/setClass";
import {LoginFormProps} from "./LoginForm.types";
import "./LoginForm.scss";
import { setItem } from "../../modules/hooks/useCookie";
import { useNavigate } from "react-router-dom";
import Paragraph from "../a_Paragraph/Paragraph";
import Textbox from "../a_Textbox/Textbox";
import Button from "../a_Button/Button";
import Checkbox from "../a_Checkbox/Checkbox";

const LoginForm = ({className, alwaysExpanded, setLoggedIn, loggedIn, theme}: LoginFormProps) => {

    const navigate = useNavigate()

    const [openLoginForm, setOpenLoginForm] = useState(alwaysExpanded ? true : false)
    const [loginFormData, setLoginFormData] = useState({
        name: "",
        password: ""
    })

    const login = () => {
        fetch("http://localhost:3000/users/login", {
            method: "POST",
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ name: loginFormData.name, password: loginFormData.password }) 
        })
        .then((val) => val.json())
        .then((val) => {
            if (!val.loggedUserId) return
            setLoggedIn(val.loggedUserId)
            setItem("hw_login", val.loggedUserId, 1)
        })
    }

    return <div className={setClass("ihw_loginform", [alwaysExpanded?"expanded":"", theme], className)}>
        <div className="ihw_loginform__textboxes">
            <Textbox 
                theme={theme} 
                value={loginFormData.name} 
                placeholder={"Enter User"} 
                onChange={(value) => {setLoginFormData({name: value, password: loginFormData.password})}} 
            />
            <Textbox 
                theme={theme} 
                isPassword 
                value={loginFormData.password} 
                placeholder={"Enter Password"} 
                onChange={(value) => {setLoginFormData({password: value, name: loginFormData.name})}}
            />
        </div>
        <Checkbox 
            theme={theme} 
            checked={false} 
            label={"Save info for next login."} 
            onChange={undefined} 
        />
        <Button 
            theme={theme} 
            onClick={() => {login()}} 
            children={"Log In"} 
        />
    </div>
}
export default LoginForm
