import React from "react";
import { setClass } from "../../modules/setClass";
import { NewsletterProps } from "./Newsletter.types";
import texts from "./Newsletter.json"
import "./Newsletter.scss";

const Newsletter = ({language, theme, className}: NewsletterProps) => {

    return (
        <div className={setClass("hw_newsletter", [theme], className)}>
            newsletter
        </div>
    )
}

export default Newsletter
