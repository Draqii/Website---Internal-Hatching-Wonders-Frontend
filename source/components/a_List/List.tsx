import React from "react";
import {setClass} from "../../modules/setClass";
import {ListProps} from "./List.types";
import "./List.scss";

const List = ({isOrdered, items, theme, className}: ListProps) => {

    const mapItems = () => items.map((item, item_id) => <li key={item_id} className="ihw_list__item">{item}</li>)

    return (
        isOrdered === false ? <ul className={setClass("ihw_list", [theme], className)}> {mapItems()} </ul> :
         <ol className={setClass("ihw_list", [theme], className)}> {mapItems()} </ol>
    )
}

export default List
