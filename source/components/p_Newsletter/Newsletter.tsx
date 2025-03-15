import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { request } from "../../modules/request"
import { NewsletterProps } from "./Newsletter.types";
import { Heading, Image, Table } from "da-awesome-library/build"
import img_newsletter from "../../../public/images/newsletter.png"
import texts from "./Newsletter.json"
import "./Newsletter.scss";

const Newsletter = ({language, theme, className}: NewsletterProps) => {

    const [subscribers, setSubscribers] = useState([])

    useEffect(() => {
        document.title = "Newsletter Subscribers - Internal Hatching Wonders"
        request("/newsletter/get-subscribers", "post", ({payload: {
            app_id: ""
        }}), (response) => {
            console.log(response.status)
            console.log(response.payload.subscribers)
            setSubscribers(response.payload.subscribers)
        })
    }, [])

    return (
        <div className={setClass("hw_newsletter", [theme], className)}>
            <Heading 
                className="hw_newsletter__title"
                children={"Newsletter Subscribers"}
                size={"teaser"} 
                theme={"light"} />

            <Table
                className="hw_newsletter__table" 
                data={{
                headings: ["Slot", "Subscriber Email", "Subscriber Name"],
                rows: subscribers.map((subscriber, slot_id) => ({
                        columns: [(slot_id+1), subscriber.email, subscriber.name]
                    }))
                
            }} theme={"light"} />
            <Image className="hw_newsletter__background" src={img_newsletter} alt={"cannnot load image"} theme={"light"} />
        </div>
    )
}

export default Newsletter
