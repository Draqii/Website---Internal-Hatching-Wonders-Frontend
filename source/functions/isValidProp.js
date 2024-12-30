export const isValidProp = (prop) => {
  
    return(
    prop ?
        (typeof prop !== "undefined") ?
            ((typeof prop === 'string' && prop !== "" && prop !== "any") || 
            (Array.isArray(prop) && prop.length > 0 && prop[0] !== "any")
            )? true : false
        : false
    : false
)}