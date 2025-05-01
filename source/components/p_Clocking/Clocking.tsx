import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ClockingProps } from "./Clocking.types";
import { Button, Heading, Image } from "da-awesome-library/build";
import { request } from "../../modules/request";
import img_clocking from "../../../public/images/clocking.png"
import texts from "./Clocking.json"
import "./Clocking.scss";

const Clocking = ({ language, theme, className }: ClockingProps) => {

    const [clockings, setClockings] = useState([])

    useEffect(() => {
        document.title = "Clocking System - Internal Hatching Wonders"
    }, [])

    const submitClocking = () => {
        request("/clockings/add", "POST", {}, (response) => {
            if (response.status === "success") setClockings(response.payload.clockings)
        })
    }

    return (
        <div className={setClass("hw_clocking", [theme], className)}>
            <Heading
                className="hw_clocking__title"
                children={"Clocking System"}
                size={"teaser"}
                theme={"light"} />
            <Button
                children={"Save Changes"}
                isPrimary={false}
                theme={"light"}
                onClick={() => submitClocking()} />

            {clockings.length > 0 ? <div className="hw_clocking__clockings">
                {clockings.map((_clocking, clocking_id) => <div key={clocking_id}>
                
                </div>)}
            </div> : null}
                

            <Image className="hw_clocking__background" src={img_clocking} alt={"cannnot load image"} theme={"light"} />
        </div>
    )
}

export default Clocking
