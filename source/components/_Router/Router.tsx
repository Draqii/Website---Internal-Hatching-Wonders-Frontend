import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { RouterProps } from "./Router.types";
import { Routes, Route } from "react-router-dom";
import useCookie from "../../modules/hooks/useCookie";
import Home from "../p_Home/Home";
import NotFound from "../p_NotFound/NotFound";
import Newsletter from "../p_Newsletter/Newsletter";
import Clocking from "../p_Clocking/Clocking";
import Employees from "../p_Employees/Employees";
import Gears from "../p_Settings/Gears";
import "./Router.scss";

const Router = ({bg, setBg, language, theme, className }: RouterProps) => {

    const routes = [
        {
            path: "/", 
            component: <Home
                bg={bg === "custom"}
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/newsletter", 
            component: <Newsletter
                bg={bg === "custom"}
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/newsletter", 
            component: <Newsletter
                bg={bg === "custom"}
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/clocking", 
            component: <Clocking
                bg={bg === "custom"}
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/employees", 
            component: <Employees
                bg={bg === "custom"}
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/settings", 
            component: <Gears
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} 
                setBG={setBg} />
        },
        {
            path: "/*", 
            component: <NotFound
                bg={bg === "custom"}
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
    ]

    return (
        <Routes>
            {routes.map((route, key) =>
            <Route
                key={"route-" + key}
                path={route.path}
                Component={() => route.component} />)}
        </Routes>
    )
}

export default Router
