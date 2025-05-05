import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { GearsProps } from "./Gears.types";
import texts from "./Gears.json"
import "./Gears.scss";
import { Checkbox, Heading, Paragraph, Button } from "da-awesome-library/build";
import useCookie, { setItem } from "../../modules/hooks/useCookie";
import { useNavigate } from "react-router-dom";

const Gears = ({ setBG, language, theme, className }: GearsProps) => {

    const navigate = useNavigate()

    const [bg, _setBG]: any = useState(useCookie("hw_bg", "default")[0])

    const updateTheme = () => {
        setItem("hw_bg", bg === "custom" ? "default" : "custom", 360)
        _setBG(bg === "custom" ? "default" : "custom")
    }

    useEffect(() => {
        setBG(bg)
    }, [bg])

    return (
        <div className="hw_settings">
            <section className="hw_settings__teaser">
                <Heading children={"Page Settings!"} size={"teaser"} theme={"light"} />
                <Paragraph size={"large"} theme={"light"}>Hai! There are a few things you can customize on this website. Choose whatever you like if you feel like it!</Paragraph>
            </section>
            <section className="hw_settings__teaser">
                <Checkbox checked={bg === "default"} children={"Safe For Work Mode (No NSFW)"} onChange={() => updateTheme()} theme={"light"} hasSecondaryTextColor={false} />
            </section>
            <Button children={"Back To Home"} isPrimary={false} theme={"light"} onClick={() => navigate("/")} />
        </div>
    )
}

export default Gears
