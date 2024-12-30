import {isValidProp} from "./isValidProp.js"

export const prefix = "draqfire"
export const setClass = (
    blockElement: string, 
    modifiers?: Array<string>,
    className?: string,
    addPrefix?: boolean
    ):string => {    
    if (addPrefix) blockElement = blockElement.split(" ").map((PartBlock) => prefix+"-"+PartBlock).join(" ")
    const Custom: string = (isValidProp(className) ? ` ${className}`:``)
    const Modifiers: string = (
        isValidProp(modifiers) ? modifiers.map(
            (modifier) => isValidProp(modifier) ? 
                addPrefix ? ` ${prefix}-${blockElement}--${modifier}` 
                : ` ${blockElement}--${modifier}` 
            : ``
        ).join(` `):``
    )
    
    return (blockElement + Modifiers + Custom)
}