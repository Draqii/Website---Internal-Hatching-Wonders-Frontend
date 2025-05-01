import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { changeForm, submitForm } from "../../modules/form"
import { EmployeesProps } from "./Employees.types";
import { Button, Heading, Textbox, Image, Paragraph, Table } from "da-awesome-library/build";
import { request } from "../../modules/request";
import img_employees from "../../../public/images/employees.png"
import texts from "./Employees.json"
import "./Employees.scss";

const Employees = ({ language, theme, className }: EmployeesProps) => {

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
        if(form.show === "add") _submitRegisterForm()
        if(form.show === "update") _submitUpdateForm()
        if(form.show === "delete") _submitDeleteForm()
    }

    const _submitRegisterForm = () => {
        submitForm("/employees/register", {email: form.email, password: form.password, name: form.name, role: form.role}, form, setForm, {})
    }

    const _submitUpdateForm = () => {
        submitForm("/employees/update", {email: form.email, password: form.password, name: form.name, role: form.role}, form, setForm, {})
    }

    const _submitDeleteForm = () => {
        submitForm("/employees/delete", {email: form.email, password: form.password, name: form.name, role: form.role}, form, setForm, {})
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
                    children={"Employees"}
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


                {form.show === "none" ? <Button 
                    children={"Add Employee"} 
                    isPrimary={false} 
                    theme={"light"} 
                    onClick={() => changeForm(form, "show", "add", (_form) => setForm(_form))} /> : form.show === "add" ? <div className="hw_employees__options">
                    <Button 
                        children={"Save Changes"} 
                        isPrimary={false} 
                        theme={"light"} 
                        onClick={() => _submitAnyForm()} />
                    <Button 
                        children={"Abort Changes"} 
                        isPrimary={false} 
                        theme={"light"} 
                        onClick={() => abortEditing()} />
                </div> : null}

                <div className="hw_employees__items">
                    {employees.map((employee, employee_id) => <div className="hw_employees__item">
                        <Table data={{
                            headings: ["Name", "Role", "Email", "Password"],
                            rows: [
                                {columns: [employee.name, employee.role, employee.email, "No Display"]}
                            ]
                        }} theme={"light"} />
                    </div>)}
                </div>
            </div>
            <Image className="hw_employees__background" src={img_employees} alt={"cannnot load image"} theme={"light"} />
        </div>
    )
}

export default Employees
