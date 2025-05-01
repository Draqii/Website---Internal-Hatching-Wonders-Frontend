import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../../modules/request";
import { setClass } from "../../modules/setClass";
import { LoginProps } from "./Login.types";
import { changeForm, submitForm } from "../../modules/form";
import { Heading, Textbox, Button, Image } from "da-awesome-library/build";
import login from "../../../public/images/login.png"
import texts from "./Login.json"
import "./Login.scss";

const Login = ({ loggedIn, setLoggedIn, language, theme, className }: LoginProps) => {

    const navigate = useNavigate()

    const [initialForm, setInitialForm] = useState({
        email: "",
        password: ""
    })
    const [form, setForm] = useState(initialForm)

    const abortEditing = () => {
        setForm(initialForm)
    }

    const _submitLoginForm = () => {
        request("/employees/login", "POST", { email: form.email, password: form.password }, (response) => {
            if (response.status === "success") {
                navigate("/")
                setLoggedIn(response.payload.id)
            }
        })
    }

    return (
        <div className={setClass("hw_login hw_route", [theme], className)}>
            <Heading
                className="hw_login__title"
                children={"Log In"}
                size={"xlarge"}
                theme={"light"} />
            <Textbox
                className="hw_login__textbox"
                value={form.email}
                theme={"light"}
                onChange={(value) => changeForm(form, "email", value, setForm)}
                placeholder={"Employee Email"} />
            <Textbox
                isPassword={true}
                className="hw_login__textbox"
                value={form.password}
                theme={"light"}
                onChange={(value) => changeForm(form, "password", value, setForm)}
                placeholder={"Employee Password"} />


            <div className="hw_login__options">
                <Button
                    children={"Save Changes"}
                    isPrimary={false}
                    theme={"light"}
                    onClick={() => _submitLoginForm()} />
                <Button
                    children={"Abort Changes"}
                    isPrimary={false}
                    theme={"light"}
                    onClick={() => abortEditing()} />
            </div> :
            <Image className="hw_login__background" src={login} alt={"cannnot load image"} theme={"light"} />
        </div>
    )
}

export default Login
