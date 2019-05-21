import React from "react";
import "./StarWars.css"



const CharacterComponent = props => {

        return (

            <div className = "character-wrapper">
                <h2 className="charName">{props.char.name}</h2>
                    <div className="char-info-wrapper">
                         <p>Gender: {props.char.gender}</p>
                        <p>Height: {props.char.height}</p>
                        <p>Mass: {props.char.mass}</p>
                        <p>Hair Color: {props.char.hair_color}</p> 
                        <p>Eye Color: {props.char.eye_color}</p>
                    </div>
            </div>
        )
}

export default CharacterComponent;