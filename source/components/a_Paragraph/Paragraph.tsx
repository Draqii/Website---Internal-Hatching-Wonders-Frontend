import React from "react";
import { setClass } from "../../modules/setClass";
import { ParagraphProps } from "./Paragraph.types";
import "./Paragraph.scss";

const Paragraph = ({size, children, theme, className}: ParagraphProps) => {

    return (
        <p className={setClass("ihw_paragraph", [theme, size], className)}>
            {children}
        </p>
    )
}

export default Paragraph
