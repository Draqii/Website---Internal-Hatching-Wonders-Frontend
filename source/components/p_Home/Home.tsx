import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { Heading, Image, Paragraph } from "da-awesome-library/build";
import img_welcome from "../../../public/images/welcome.png"
import texts from "./Home.json"
import "./Home.scss";

const Home = ({bg, language, theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "Internal Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_home", [theme], className)}>
            <div className="hw_home__content">
                <section className="hw_home__section">
                    <Heading 
                        className="hw_home__title"
                        children={"Internal Hatching Wonders"}
                        size={"teaser"} 
                        theme={"light"} />
                    <Paragraph 
                        className="hw_home__text"
                        children={"Welcome to the Internal Interface for clients and employees of hatching wonders! Use the tools below to get around working with Hatching Wonders."}
                        size={"large"} 
                        theme={"light"} />
                </section>
                <section className="hw_home__section">
                    <Heading 
                        className="hw_home__title"
                        children={"The Clocking System"}
                        size={"large"} 
                        theme={"light"} />
                    <Paragraph 
                        className="hw_home__text"
                        children={"The clocking system is supposed to be used whenever you start your working schedule, to clock in. And whenever you're done working, to clock out."}
                        size={"medium"} 
                        theme={"light"} />
                </section>
                <section className="hw_home__section">
                    <Heading 
                        className="hw_home__title"
                        children={"The Project Manager"}
                        size={"large"} 
                        theme={"light"} />
                    <Paragraph 
                        className="hw_home__text"
                        children={"This system is there to manage details of projects. Please use it to see which projects and tasks you're asigned to, and connect your working hours to tasks."}
                        size={"medium"} 
                        theme={"light"} />
                </section>
            </div>
            {!bg?null:<Image className="hw_home__background" src={img_welcome} alt={"cannnot load image"} theme={"light"} />}
        </div>
    )
}

export default Home
