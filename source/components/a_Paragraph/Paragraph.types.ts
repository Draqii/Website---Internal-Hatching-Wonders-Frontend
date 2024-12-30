export interface ParagraphProps  {
    size: "large" | "medium" | "small"
    children
    theme?: "light" | "dark"
    className?: string
}