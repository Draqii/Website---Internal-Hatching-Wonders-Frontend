import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ClockingProps } from "./Clocking.types";
import { Button, Heading, Paragraph } from "da-awesome-library/build";
import img_clock from "../../../public/images/clock.png"
import "./Clocking.scss";
import Calendar from "../o_Calendar/Calendar";

const Clocking = ({loggedUID, theme, className}: ClockingProps) => {

    const [clockedItems, setClockedItems] = useState([])

    const getAllCLockingsFromUser = () => {
        fetch("http://localhost:3000/clockings/", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ uid: loggedUID })
        })
        .then((val) => val.json())
        .then((val) => {
            if (!val.clockings) return
            setClockedItems(val.clockings)
        })
    }

    const update_clocking = () => {
        fetch("http://localhost:3000/clockings/new", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ uid: loggedUID})
        })
        .then((val) => val.json())
        .then((val) => {
            if (!val.clockings) return
            setClockedItems(val.clockings)
        })        
    }

    useEffect(() => {
        document.title = "Clocking - Internal Hatching Wonders"
        getAllCLockingsFromUser()
    }, [])

    return (
        <div className={setClass("hw_clocking hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Clock In And Out"} />
            <Button onClick={() => {update_clocking()}} content={"Clock In Or Out"} />
            <div className="hw_clocking__clockings">
                {clockedItems.map((clocking) => <div className="hw_clocking__clocking">
                    <Paragraph theme={theme} content={"clocked " + clocking.direction} />
                    <Paragraph theme={theme} content={clocking.time} />
                </div>)}
            </div>
            <img src={img_clock} />

            <div className="hw_calendar">
                <Calendar theme={theme} />
            </div>
        </div>
    )
}

export default Clocking
