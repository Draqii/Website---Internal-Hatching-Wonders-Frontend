import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ProjectProps } from "./Project.types";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Heading, Paragraph, Textbox } from "da-awesome-library/build";
import "./Project.scss";
import { changeFormData } from "../../functions/json";

const Project = ({ theme, className }: ProjectProps) => {

    const navigate = useNavigate()
    const { project_id, mode } = useParams()

    const [projectItem, setProjectItem] = useState({
        name: "",
        milestones: []
    })

    const getSingleProject = () => {
        fetch("http://localhost:3000/projects/get_single", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ project_id: project_id })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status !== 200) return
                document.title = res.project.name + " - Internal Hatching Wonders"
                setProjectItem(res.project)
            })
    }

    const updateSingleProject = () => {
        fetch("http://localhost:3000/projects/update_single", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                project: {
                    name: projectItem.name,
                    id: project_id
                }
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status !== 200) return
                setProjectItem(res.project)
            })
    }

    const addNewProject = () => {
        fetch("http://localhost:3000/projects/new", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                project: {
                    name: projectItem.name
                }
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status !== 200) return
                setProjectItem(res.project)
            })
    }

    const changeFormData = (key, value) => {
        const _projectItem = JSON.parse(JSON.stringify(projectItem))
        _projectItem[key] = value
        setProjectItem(_projectItem)
    }

    const navigateBack = () => {
        navigate("/projects")
    }

    useEffect(() => {
        if (mode !== "new") getSingleProject()
        if (mode === "new") document.title = "New Project - Internal Hatching Wonders"
        if (mode === "edit") document.title = "Edit Project - Internal Hatching Wonders"

    }, [])

    return (
        <div className={setClass("hw_project", [theme], className)}>
            <Heading theme={theme} content={mode === "edit" ? "Edit Project" : mode === "new" ? "New Project" : projectItem.name} size={"teaser"} />

            {mode === "edit" || mode === "new" ? <div>
                <div className="hw_project__flex">
                    <Paragraph theme={theme} content={"Project Name"} />
                    <Textbox value={projectItem.name} placeholder={projectItem.name} onChange={(value: any) => { changeFormData("name", value) }} />
                </div>
                <br />
                {projectItem.milestones.map((milestone, milestone_id) => <div>
                    <Heading size="large" theme={theme} content={"Milestones"} />

                    <div className="hw_project__flex">
                        <Paragraph theme={theme} content={"Milestone " + (milestone_id + 1)} />
                        <Textbox value={milestone.name} placeholder={milestone.name} onChange={(value: any) => { changeFormData("milestone1", value) }} />
                    </div>


                    <Heading size="medium" theme={theme} content={milestone.name} />
                    {milestone.tasks.map((task) => <div>
                        <Paragraph theme={theme} content={task.name} />
                    </div>)}
                </div>)}
                <br />
                <div className="hw_project__flex">
                    <Button theme={theme} onClick={() => {
                        if (mode === "edit") updateSingleProject()
                        else if (mode === "new") addNewProject()
                    }} content={"Save Changes"} />
                    <Button theme={theme} onClick={() => navigateBack()} content={"Discard Changes"} />
                </div>
                <br />
            </div> : <div>
                <div className="hw_project__milestones">
                    <Heading size="large" theme={theme} content={"Milestones"} />
                    {projectItem.milestones.map((milestone) => <div className="hw_project__milestone">
                        <Heading size="medium" theme={theme} content={milestone.name} />
                        {milestone.tasks.map((task) => <div>
                            <Paragraph theme={theme} content={task.name} />
                        </div>)}
                    </div>)}
                </div>
                <Button theme={theme} onClick={() => navigateBack()} content={"Back To Overview"} />
            </div>}

        </div>
    )
}

export default Project
