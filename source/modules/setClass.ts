export const setClass = (blockElement: string,  modifiers?: Array<string>, className?: string):string => {  
    const Custom: string = (className ? ` ${className}`:``)
    const Modifiers: string = (modifiers.length > 0 ? modifiers.map((modifier) => modifier ? ` ${blockElement}--${modifier}` : ``).join(` `):``)
    return (blockElement + Modifiers + Custom)
}