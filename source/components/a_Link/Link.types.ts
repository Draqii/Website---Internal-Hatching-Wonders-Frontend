export interface LinkProps  {
    target: "blank" | "self"
    children: string
    isInternal: boolean
    href: string
    theme?: "light" | "dark"
    className?: string
}