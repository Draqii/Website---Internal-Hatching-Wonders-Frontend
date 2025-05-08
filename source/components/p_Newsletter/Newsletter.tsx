import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { request } from "../../modules/request"
import { NewsletterProps } from "./Newsletter.types";
import { Button, Heading, Image, Paragraph, Table } from "da-awesome-library/build"
import img_newsletter from "../../../public/images/newsletter.png"
import texts from "./Newsletter.json"
import "./Newsletter.scss";
import { changeForm, submitForm } from "../../modules/form";

const Newsletter = ({ bg, language, theme, className }: NewsletterProps) => {

    const [subscribers, setSubscribers] = useState([])

    const [initialForm, setInitialForm] = useState({
        show: "none",
        email: "",
        name: ""
    })
    const [form, setForm] = useState(initialForm)

    const abortEditing = () => {
        setForm(initialForm)
    }

    const _submitAnyForm = () => {
        if (form.show === "add") _submitRegisterForm()
        if (form.show === "update") _submitUpdateForm()
        if (form.show === "delete") _submitDeleteForm()
    }

    const _submitRegisterForm = () => {
        submitForm("/employees/register", { email: form.email, name: form.name }, form, setForm, {})
    }

    const _submitUpdateForm = () => {
        submitForm("/employees/update", { email: form.email, name: form.name }, form, setForm, {})
    }

    const _submitDeleteForm = () => {
        submitForm("/employees/delete", { email: form.email, name: form.name }, form, setForm, {})
    }

    useEffect(() => {
        document.title = "Newsletter Subscribers - Internal Hatching Wonders"
        request("/newsletter/get-subscribers", "post", ({
            payload: {
                app_id: ""
            }
        }), (response) => {
            console.log(response.status)
            console.log(response.payload.subscribers)
            setSubscribers(response.payload.subscribers)
        })
    }, [])

    return (
        <div className={setClass("hw_newsletter", [theme], className)}>
            <div className="hw_newsletter__content">
                <Heading
                    className="hw_newsletter__title"
                    children={"Newsletter Subscribers"}
                    size={"teaser"}
                    theme={"light"} />
                <div className="hw_employees__flex">
                    <div>
                        <Heading
                            className="hw_employees__title"
                            children={"What This Page Is For"}
                            size={"xlarge"}
                            theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>This page is connected to the frontend of HatchingWonders.com and enlists all newsletter subscribers to include as nwesletter recepients.</Paragraph>
                    </div>
                    <div>
                        <Heading
                            className="hw_employees__title"
                            children={"Admin Options"}
                            size={"xlarge"}
                            theme={"light"} />
                        {form.show === "none" ? <Button isEnabled={true}
                            children={"Add Subscriber"}
                            isPrimary={false}
                            theme={"light"}
                            onClick={() => changeForm(form, "show", "add", (_form) => setForm(_form))} /> : form.show === "add" ? <div className="hw_employees__options">
                                <Button isEnabled={true}
                                    children={"Save Changes"}
                                    isPrimary={false}
                                    theme={"light"}
                                    onClick={() => _submitAnyForm()} />
                                <Button isEnabled={true}
                                    children={"Abort Changes"}
                                    isPrimary={false}
                                    theme={"light"}
                                    onClick={() => abortEditing()} />
                            </div> : null}
                        <Button isEnabled={true}
                            children={"Edit Subscriber"}
                            isPrimary={false}
                            theme={"light"}
                            onClick={() => changeForm(form, "show", "add", (_form) => setForm(_form))} />
                    </div>
                </div>

                <Heading
                    className="hw_newsletter__subtitle"
                    children={"All Subscribers"}
                    size={"xlarge"}
                    theme={"light"} />
                <br />

                <Table
                    className="hw_newsletter__table"
                    data={{
                        headings: ["Entry", "Subscriber Email", "Subscriber Name"],
                        rows: subscribers.map((subscriber, slot_id) => ({
                            columns: [(slot_id + 1), subscriber.email, subscriber.name]
                        }))

                    }} theme={"light"} />
            </div>
            {!bg ? null : <Image className="hw_newsletter__background" src={img_newsletter} alt={"cannnot load image"} theme={"light"} />}
        </div>
    )
}

export default Newsletter
