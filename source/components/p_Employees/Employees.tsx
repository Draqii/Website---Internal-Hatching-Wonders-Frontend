import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { changeForm, submitForm } from "../../modules/form"
import { EmployeesProps } from "./Employees.types";
import { Button, Heading, Textbox, Image, Paragraph, Table } from "da-awesome-library/build";
import { request } from "../../modules/request";
import img_employees from "../../../public/images/employees.png"
import texts from "./Employees.json"
import "./Employees.scss";

const Employees = ({ bg, language, theme, className }: EmployeesProps) => {

    const [employees, setEmployees] = useState([])

    const [initialForm, setInitialForm] = useState({
        show: "none",
        email: "",
        password: "",
        name: "",
        role: ""
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
        submitForm("/employees/register", { email: form.email, password: form.password, name: form.name, role: form.role }, form, setForm, {})
    }

    const _submitUpdateForm = () => {
        submitForm("/employees/update", { email: form.email, password: form.password, name: form.name, role: form.role }, form, setForm, {})
    }

    const _submitDeleteForm = () => {
        submitForm("/employees/delete", { email: form.email, password: form.password, name: form.name, role: form.role }, form, setForm, {})
    }

    useEffect(() => {
        document.title = "Employees - Internal Hatching Wonders"
        request("/employees/get", "POST", {}, (response) => setEmployees(response.payload.employees))
    }, [])

    return (
        <div className={setClass("hw_employees", [theme], className)}>
            <div className="hw_employees__content">
                <Heading
                    className="hw_employees__title"
                    children={"Employees Page"}
                    size={"teaser"}
                    theme={"light"} />

                {form.show === "add" ? <section>
                    <Heading
                        className="hw_employees__title"
                        children={"Add Employee"}
                        size={"xlarge"}
                        theme={"light"} />
                    <Textbox
                        className="hw_employees__textbox"
                        value={form.name}
                        theme={theme}
                        onChange={(value) => changeForm(form, "name", value, setForm)}
                        placeholder={"Employee Name"} />
                    <Textbox
                        className="hw_employees__textbox"
                        value={form.email}
                        theme={theme}
                        onChange={(value) => changeForm(form, "email", value, setForm)}
                        placeholder={"Employee Email"} />
                    <Textbox
                        className="hw_employees__textbox"
                        value={form.role}
                        theme={theme}
                        onChange={(value) => changeForm(form, "role", value, setForm)}
                        placeholder={"Employee Role"} />
                    <Textbox
                        isPassword={true}
                        className="hw_employees__textbox"
                        value={form.password}
                        theme={theme}
                        onChange={(value) => changeForm(form, "password", value, setForm)}
                        placeholder={"Employee Password"} />
                </section> : null}

                <div className="hw_employees__flex">
                    <div>
                    <Heading
                        className="hw_employees__title"
                        children={"What This Page Is For"}
                        size={"xlarge"}
                        theme={"light"} />
                    <Paragraph size={"medium"} theme={"light"}>This page is dedicated to finding and managing personal details off employees of hatching wonders in relation to their work. Partners not part of Hatching Wonders might be here aswell.</Paragraph>
                    </div>
                    <div>
                    <Heading
                        className="hw_employees__title"
                        children={"Admin Options"}
                        size={"xlarge"}
                        theme={"light"} />
                    {form.show === "none" ? <Button isEnabled={true}
                    children={"Add Employee"}
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
                    children={"Edit Employee"}
                    isPrimary={false}
                    theme={"light"}
                    onClick={() => changeForm(form, "show", "add", (_form) => setForm(_form))} />
                    </div>
                
                    </div>

                    
                <div className="hw_employees__items">

                    <br/>
                    <Heading
                        className="hw_employees__title"
                        children={"All Employees"}
                        size={"xlarge"}
                        theme={"light"} />
                    <br/>
                    <br/>

                    <div className="hw_employees__item">
                        <Table data={{
                            headings: ["Entry", "Name", "Role", "Email", "Password"],
                            rows: employees.map((employee, employee_id) => ({
                                columns: [(employee_id + 1), employee.name, employee.role, employee.email, "No Display"]
                            }))
                        }} theme={"light"} />
                    </div>
                </div>
            </div>
            {!bg ? null : <Image className="hw_employees__background" src={img_employees} alt={"cannnot load image"} theme={"light"} />}
        </div>
    )
}

export default Employees
