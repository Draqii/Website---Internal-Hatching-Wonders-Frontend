import { request } from "./request"

const formSentCallback = (response, callback) => {
    if (response.status === 200) return callback(true)
    callback(false)
}

const sendForm = (url, payload, callback) => {
    request(
        url, 
        "POST", 
        {payload: payload}, 
        (response) => formSentCallback(response, (success) => callback(success))
    )
}

const containsNoEmptyData = (formData, formErrorsUpdate) => {
    let valueFillInfo = Object.values(formData).map((item) => item !== "")
    formErrorsUpdate(
        valueFillInfo.map((value, id) => value === false 
            ? "Field '" + Object.keys(formData)[id] + "' must be filled." 
            : ""
        )
    )
    return valueFillInfo.includes(false) === false
}

export const changeForm = (key, value, payload, callback) => {
    let deepclone = JSON.parse(JSON.stringify(payload))
    deepclone[key] = value
    callback(deepclone)
}

export const submitForm = (event, url, payload, callback, formErrorsUpdate) => {
    event.preventDefault()
    if (containsNoEmptyData(payload, formErrorsUpdate)) 
        sendForm(url, payload, callback)
}

