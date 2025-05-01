import { request } from "./request"

export const changeForm = (form, key, value, callback) => {
    const copy = JSON.parse(JSON.stringify(form))
    copy[key] = value
    callback(copy)
}

export const submitForm = (url, payload, form, setForm, errorTexts) => {
    const errors = url === "/newsletter/subscribe" ? errorChecks(form, setForm, errorTexts) : []
    if(errors.length === 0) request(url, "post", ({payload: payload}), (response) => {
        console.log(response.status)
    })
}

const errorChecks = (form, setForm, errorTexts) => {
    const copy = JSON.parse(JSON.stringify(form))
    let errors = JSON.parse(JSON.stringify(form.errors))

    const errorConsent = () => {
        if (copy.check === false) errors = addToArray(errors, errorTexts["consent"])
        else errors = removeFromArray(errors, errorTexts["consent"])
    }

    const errorEmptyEmail = () => {
        if (copy.email === "") errors = addToArray(errors, errorTexts["empty_email"])
            else errors = removeFromArray(errors, errorTexts["empty_email"])
    }

    errorConsent()
    errorEmptyEmail()
    copy["errors"] = errors
    setForm(copy)
    return errors
}

const addToArray = (arr, value) => {
    const copyArr = JSON.parse(JSON.stringify(arr))
    if(copyArr.indexOf(value) < 0) copyArr.push(value)
    return copyArr
}

const removeFromArray = (arr, value) => {
    let copyArr = JSON.parse(JSON.stringify(arr))
    if(copyArr.indexOf(value) > -1) copyArr.splice(copyArr.indexOf(value), 1)
    return copyArr
}