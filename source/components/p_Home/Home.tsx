import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { Heading, Image } from "da-awesome-library/build";
import img_welcome from "../../../public/images/welcome.png"
import texts from "./Home.json"
import "./Home.scss";

const Home = ({language, theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "Internal Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_home", [theme], className)}>
            <Heading 
                className="hw_home__title"
                children={"Internal Hatching Wonders"}
                size={"teaser"} 
                theme={"light"} />
            <Image className="hw_home__background" src={img_welcome} alt={"cannnot load image"} theme={"light"} />
        </div>
    )
}

export default Home
