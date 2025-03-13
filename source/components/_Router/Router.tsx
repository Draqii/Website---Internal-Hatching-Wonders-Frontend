import React from "react";
import { setClass } from "../../modules/setClass";
import { RouterProps } from "./Router.types";
import { Routes, Route } from "react-router-dom";
import Home from "../p_Home/Home";
import NotFound from "../p_NotFound/NotFound";
import Newsletter from "../p_Newsletter/Newsletter";
import "./Router.scss";

const Router = ({ language, theme, className }: RouterProps) => {

    const routes = [
        {
            path: "/", 
            component: <Home
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/newsletter", 
            component: <Newsletter
                className={setClass("hw_route", [theme], "")}
                language={language}
                theme={theme} />
        },
        {
            path: "/*", 
            component: <NotFound
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
