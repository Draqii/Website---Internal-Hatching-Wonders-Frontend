import React from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import texts from "./Home.json"
import "./Home.scss";

const Home = ({language, theme, className}: HomeProps) => {

    return (
        <div className={setClass("hw_home", [theme], className)}>
            home
        </div>
    )
}

export default Home
