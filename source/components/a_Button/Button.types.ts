export interface ButtonProps  {
    children: string
    isDisabled?: boolean
    onClick: Function
    theme?: "light" | "dark"
    className?: string
}