import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {

    const [planets, setPlanets] = useState([]);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        fetch("http://localhost:8085/planets")
        .then(response => response.json())
        .then(planetJson => {
            setPlanets(planetJson);
        })
    }, []);

    function addNewPlanet(planet) {
        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(planet)
        });

        setPlanets([...planets, planet])
    }

    function onFilterText(text) {
        setFilterText(text);
    }

    const displayPlanets = planets.filter(planet => {
        const searchLowerCase = filterText.toLowerCase();

        return (
            planet.name.toLowerCase().includes(searchLowerCase)
            || planet.climate.toLowerCase().includes(searchLowerCase)
            || planet.terrain.toLowerCase().includes(searchLowerCase)
            || planet.population.toLowerCase().includes(searchLowerCase)
        );
    });

    return(
        <div className="registry">
            <Search filterText={onFilterText}/>
            <div className="content">
                <PlanetList planets={displayPlanets} />
                <NewPlanetForm addNewPlanet={addNewPlanet} />
            </div>
        </div>
    )
}

export default Registry;