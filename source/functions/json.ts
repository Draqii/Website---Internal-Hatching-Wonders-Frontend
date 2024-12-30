export const changeFormData = (formData, key, arg, value, callback) => {
    const result = formData.map((formElement) => {
        formElement[arg] = formElement.key === key ? value : formElement[arg]
        return formElement
    })
    callback(result)
}

export const createFormObject = (formData) => {
    let result = {}
    formData.map((formElement) => (!result[formElement.key]) ? result[formElement.key] =  (
        formElement.type === "textbox" || formElement.type === "textarea" ? formElement.value :
        formElement.type === "checkbox" ? formElement.checked : null) 
        : result[formElement.key] = "")
    return result
}