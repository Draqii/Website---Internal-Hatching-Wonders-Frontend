import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { Heading } from "da-awesome-library/build";
import texts from "./Home.json"
import "./Home.scss";

const Home = ({language, theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "Internal Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_home", [theme], className)}>
            <Heading 
                className="hw_newsletter__title"
                children={"Internal Hatching Wonders"}
                size={"teaser"} 
                theme={"light"} />
        </div>
    )
}

export default Home
