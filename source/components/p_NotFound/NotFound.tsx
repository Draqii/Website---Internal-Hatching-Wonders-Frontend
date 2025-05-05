import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { NotFoundProps } from "./NotFound.types";
import { Heading } from "da-awesome-library/build";
import texts from "./NotFound.json"
import "./NotFound.scss";

const NotFound = ({bg, language, theme, className}: NotFoundProps) => {

    useEffect(() => {
        document.title = "Page Not Found - Internal Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_notfound", [theme], className)}>
            <Heading 
                className="hw_notfound__title"
                children={"Page Not Found"}
                size={"teaser"} 
                theme={"light"} />
        </div>
    )
}

export default NotFound
