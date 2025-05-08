import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ClockingProps } from "./Clocking.types";
import { Button, Heading, Image, Paragraph, Table } from "da-awesome-library/build";
import { request } from "../../modules/request";
import useCookie from "../../modules/hooks/useCookie";
import img_clocking from "../../../public/images/clocking.png"
import texts from "./Clocking.json"
import "./Clocking.scss";

const Clocking = ({bg, language, theme, className }: ClockingProps) => {

    const [clockings, setClockings] = useState([])
    const [loggedIn, setLoggedIn] = useState(useCookie("hw_login", "default")[0])


    useEffect(() => {
        document.title = "Clocking System - Internal Hatching Wonders"
        request("/clockings/get", "POST", ({employee_id: loggedIn}), (response) => setClockings(response.payload.clockings))

    }, [])

    const submitClocking = () => {
        request("/clockings/add", "POST", {}, (response) => {
            if (response.status === "success") setClockings(response.payload.clockings)
        })
    }

    return (
        <div className={setClass("hw_clocking", [theme], className)}>
            
            <div className="hw_clocking__content">
                <Heading
                    className="hw_clocking__title"
                    children={"Clocking System"}
                    size={"teaser"}
                    theme={"light"} />

                <div className="hw_employees__flex">
                    <div>
                        <Heading
                            className="hw_employees__title"
                            children={"What This Page Is For"}
                            size={"xlarge"}
                            theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>Please use this system to clock in whenever you start working, and to clock out whenever you're done with it ^^ you also need to log what you worked on alongside it pleaseee.</Paragraph>
                    </div>
                    <div>
                        <Heading
                            className="hw_employees__title"
                            children={"Your Options"}
                            size={"xlarge"}
                            theme={"light"} />
                        <Button isEnabled={true}
                            children={"Add New Clocking"}
                            isPrimary={false}
                            theme={"light"}
                            onClick={() => submitClocking()} />
                    </div>
                </div>

                {clockings.length > 0 ? <div className="hw_clocking__clockings">
                    <div>
                        <Table data={{
                            headings: ["Entry", "Direction", "Timestamp"],
                            rows: clockings.map((_clocking, clocking_id) => ({
                                columns: [(clocking_id + 1), _clocking.direction, _clocking.timestamp]
                            }))
                        }} theme={"light"} />
                    </div>
                </div> : null}
            </div>
            {!bg?null:<Image className="hw_clocking__background" src={img_clocking} alt={"cannnot load image"} theme={"light"} />}
        </div>
    )
}

export default Clocking
