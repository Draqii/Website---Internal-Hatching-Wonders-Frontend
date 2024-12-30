import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { TestProps } from "./Test.types";
import Textbox from "../a_Textbox/Textbox";
import Button from "../a_Button/Button";
import Checkbox from "../a_Checkbox/Checkbox";
import Heading from "../a_Heading/Heading";
import Link from "../a_Link/Link";
import Paragraph from "../a_Paragraph/Paragraph";
import List from "../a_List/List"; 
import "./Test.scss"; 

const Test = ({theme, className}: TestProps) => {

    const [toggled, setToggled] = useState(false)
    const [value, setValue] = useState("")
    const [submitCount, setSubmitCount] = useState(0)

    const submit = () => {
        console.log("submit")
        let new_count = submitCount + 1
        setSubmitCount(new_count)
    }

    return (
        <div className={setClass("ihw_test", [theme], className)}>
            <Heading theme={theme} children={"Component Overview"} size={"teaser"} />
            <br/>
            <Heading theme={theme} children={"Heading"} size={"large"} />
            <Heading theme={theme} children={"Some Heading"} size={"teaser"} />
            <Heading theme={theme} children={"Some Heading"} size={"large"} />
            <Heading theme={theme} children={"Some Heading"} size={"medium"} />
            <Heading theme={theme} children={"Some Heading"} size={"small"} />
            <br/>

            <Heading theme={theme} children={"Paragraph"} size={"large"} />
            <Paragraph theme={theme} children={"Some Paragraph"} size={"large"} />
            <Paragraph theme={theme} children={"Some Paragraph"} size={"medium"} />
            <Paragraph theme={theme} children={"Some Paragraph"} size={"small"} />
            <br/>     
            
            <Heading theme={theme} children={"Link"} size={"large"} />
            <Link target="blank" href="https://google.com" isInternal={false} children={"Link"} theme={theme} />
            <Link target="self" href="/test" isInternal={true} children={"Link"} theme={theme} />
            <br/>     
            
            <Heading theme={theme} children={"List"} size={"large"} />
            <List theme={theme} isOrdered={false} items={["list item a", "list item b", "list item c"]} />
            <List theme={theme} isOrdered={true} items={["list item a", "list item b", "list item c"]} />

            <br/>
            <Heading theme={theme} children={"Textbox"} size={"large"} />
            <Textbox 
                submitCount={submitCount} 
                submit={submit} 
                onChange={(val) => setValue(val)} 
                value={""} 
                placeholder="textbox locked!" 
                isDisabled 
                theme={theme} />
            <Textbox 
                minimumCharacters={3} 
                placeholder="textbox placeholder ..."  
                submitCount={submitCount} 
                submit={submit} 
                onChange={(val) => setValue(val)} 
                value={value} 
                theme={theme} />
            <br/>
            <Heading theme={theme} children={"Button"} size={"large"} />
            <Button 
                children={"Click Me!"} 
                isDisabled 
                theme={theme} 
                onClick={() => submit()} />
            <Button 
                children={"Click Me!"} 
                theme={theme} 
                onClick={() => submit()} />
            <br/>
            <Heading theme={theme} children={"Checkbox"} size={"large"} />
            <Checkbox 
                checked={false}
                isDisabled
                label={"Toggle Me!"} 
                theme={theme} 
                onChange={(checked) => null} />
            <Checkbox 
                checked={toggled}
                label={"Toggle Me!"} 
                theme={theme} 
                onChange={(checked) => setToggled(!toggled)} />
        </div>
    )
}

export default Test
