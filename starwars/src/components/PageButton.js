import React from 'react'
import "./StarWars.css"




const PageButton = props =>{

    return (
        <button onClick={props.segue} className={props.classname}>{props.textLabel}</button>
    )

}

export default PageButton;