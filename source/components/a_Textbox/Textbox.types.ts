export interface TextboxProps  {
    onChange: Function
    value: string
    submit?: Function
    autoComplete?: string
    minimumCharacters?: number
    submitCount?: number
    placeholder?: string
    isDisabled?: boolean
    isPassword?: boolean
    theme?: "light" | "dark"
    className?: string
}