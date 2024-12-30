import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { NavLink as ReactLink } from "react-router-dom";
import { Heading, NavLink, Paragraph, Section } from "da-awesome-library/build";
import "./Home.scss";

const Home = ({theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "Internal Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_home hw_route", [theme], className)}>
            <Section direction={"column"} wrap={"wrap"} gap={"small"}>
                <Heading theme={theme} size="teaser" content={"Internal Hatching Wonders"} />
            </Section>
        </div>
    )
}

export default Home
