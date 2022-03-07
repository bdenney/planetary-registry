import React from "react"
import Planet from "./Planet"

function PlanetList() {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {/** Render a list of <Planet> components here. */}
            </tbody>
        </table>
    );
}

export default PlanetList;