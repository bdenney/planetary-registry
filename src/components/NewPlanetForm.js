import React from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({addNewPlanet}) {

    function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;

        const planetData = {
            id: uuid(),
            name: formElement["name"].value,
            climate: formElement["climate"].value,
            terrain: formElement["terrain"].value,
            population: formElement["population"].value
        }

        addNewPlanet(planetData);

        formElement.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="climate" placeholder="Climate" />
            <input type="text" name="terrain" placeholder="Terrain"/>
            <input type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;