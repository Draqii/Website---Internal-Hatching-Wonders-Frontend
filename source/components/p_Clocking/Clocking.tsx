import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { ClockingProps } from "./Clocking.types";
import { Heading } from "da-awesome-library/build";
import texts from "./Clocking.json"
import "./Clocking.scss";

const Clocking = ({language, theme, className}: ClockingProps) => {
    
    useEffect(() => {
        document.title = "Clocking System - Internal Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_clocking", [theme], className)}>
            <Heading 
                className="hw_newsletter__title"
                children={"Clocking System"}
                size={"teaser"} 
                theme={"light"} />
        </div>
    )
}

export default Clocking
