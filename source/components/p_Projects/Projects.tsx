import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ProjectsProps } from "./Projects.types";
import { Button, Heading, Image, Paragraph, Table, Textbox } from "da-awesome-library/build";
import { request } from "../../modules/request";
import { changeForm, submitForm } from "../../modules/form";
import useCookie from "../../modules/hooks/useCookie";
import img_clocking from "../../../public/images/clocking.png"
import texts from "./Projects.json"
import "./Projects.scss";

const Projects = ({ bg, language, theme, className }: ProjectsProps) => {

    const [projects, setProjects] = useState([])
    const [loggedIn, setLoggedIn] = useState(useCookie("hw_login", "default")[0])
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
        request("/projects/add", "POST", ({ name: form.name,  employee_id: loggedIn }), (response) => {
            if (response.status === "success") setProjects(response.payload.projects)
        })
    }

    const _submitUpdateForm = () => {
        let project_id = null
        request("/projects/edit", "POST", ({ id: project_id,  employee_id: loggedIn }), (response) => {
            if (response.status === "success") setProjects(response.payload.projects)
        })
    }

    const _submitDeleteForm = () => {
        let project_id = null
        request("/projects/delete", "POST", ({ id: project_id,  employee_id: loggedIn }), (response) => {
            if (response.status === "success") setProjects(response.payload.projects)
        })
    }

    useEffect(() => {
        document.title = "Newsletter Subscribers - Internal Hatching Wonders"
        request("/projects/get", "POST", ({ employee_id: loggedIn }), (response) => {
            setProjects(response.payload.projects)
        })
    }, [])

    return (
        <div className={setClass("hw_projects", [theme], className)}>

            <div className="hw_clocking__content">
                <Heading
                    className="hw_clocking__title"
                    children={"Project Management"}
                    size={"teaser"}
                    theme={"light"} />

                <div className="hw_employees__flex">
                    <div>
                        <Heading
                            className="hw_employees__title"
                            children={"What This Page Is For"}
                            size={"xlarge"}
                            theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>Please use this system to create and manage projects.</Paragraph>
                    </div>
                    <div>
                        <Heading
                            className="hw_employees__title"
                            children={"Admin Options"}
                            size={"xlarge"}
                            theme={"light"} />
                        {form.show === "none" ? <Button isEnabled={true}
                            children={"Add Project"}
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
                            children={"Edit Project"}
                            isPrimary={false}
                            theme={"light"}
                            onClick={() => changeForm(form, "show", "add", (_form) => setForm(_form))} />
                    </div>
                </div>

            {form.show === "add" ? <section>
                    <Heading
                        className="hw_employees__title"
                        children={"Add Project"}
                        size={"xlarge"}
                        theme={"light"} />
                    <Textbox
                        className="hw_employees__textbox"
                        value={form.name}
                        theme={theme}
                        onChange={(value) => changeForm(form, "name", value, setForm)}
                        placeholder={"Project Name"} />
                </section> : null}

            {projects.length > 0 ? <div className="hw_clocking__clockings">
                <div>
                    <Table data={{
                        headings: ["Entry", "Name"],
                        rows: projects.map((_project, project_id) => ({
                            columns: [(project_id + 1), _project.name]
                        }))
                    }} theme={"light"} />
                </div>
            </div> : null}
        </div>
            { !bg ? null : <Image className="hw_clocking__background" src={img_clocking} alt={"cannnot load image"} theme={"light"} /> }
        </div >
    )
}

export default Projects
