import React from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm() {

    return(
        <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="climate" placeholder="Climate" />
            <input type="text" name="terrain" placeholder="Terrain"/>
            <input type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;