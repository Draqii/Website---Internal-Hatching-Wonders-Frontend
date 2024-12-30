import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ProjectsProps } from "./Projects.types";
import { Button, Heading, Paragraph } from "da-awesome-library/build";
import { useNavigate } from "react-router-dom";
import "./Projects.scss";

const Projects = ({theme, className}: ProjectsProps) => {

    const navigate = useNavigate()

    const [projectItems, setProjectItems] = useState([])

    const getAllProjects = () => {
        fetch("http://localhost:3000/projects/get_all", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ uid: "none" })
        })
        .then((val) => val.json())
        .then((val) => {
            if (!val.projects) return
            setProjectItems(val.projects.projects)
            console.log(val.projects.projects)
        })
    }

    const navigateToProject = (project_id, mode) => {
        navigate("/projects/" + mode + "/" + project_id)
    }

    useEffect(() => {
        document.title = "Projects - Internal Hatching Wonders"
        getAllProjects()
    }, [])

    return (
        <div className={setClass("hw_projects hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"All Projects"} />
            <div className="hw_projects__map">
                {projectItems.map((project, id) => <div className="hw_projects__project">
                    <div className="hw_projects__projecttitle"> 
                        <Paragraph theme={theme} content={"#"+ (id+1) } />
                        <Heading size="large" theme={theme} content={project.name} />
                    </div>
                    <div className="hw_projects__flex">
                        <Button onClick={() => navigateToProject(project.id, "view")} content={"Visit Project"} />
                        <Button onClick={() => navigateToProject(project.id, "edit")} content={"Edit Project"} />
                    </div>
                </div>)}
                <Button onClick={() => navigateToProject("new", "new")} content={"New Project"} />
            </div>
        </div>
    )
}



export default Projects
