export interface CheckboxProps  {
    checked: boolean
    label: string
    isDisabled?: boolean
    onChange: Function
    theme?: "light" | "dark"
    className?: string
}