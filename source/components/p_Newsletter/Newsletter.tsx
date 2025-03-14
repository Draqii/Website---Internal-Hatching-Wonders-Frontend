import React from "react";
import { setClass } from "../../modules/setClass";
import { NewsletterProps } from "./Newsletter.types";
import { Heading } from "da-awesome-library/build"
import texts from "./Newsletter.json"
import "./Newsletter.scss";

const Newsletter = ({language, theme, className}: NewsletterProps) => {

    return (
        <div className={setClass("hw_newsletter", [theme], className)}>
            <Heading 
                children={"Newsletter Subscribers"}
                size={"teaser"} 
                theme={"light"} />
        </div>
    )
}

export default Newsletter
