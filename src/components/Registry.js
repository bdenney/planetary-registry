import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {

    return(
        <div className="registry">
            <Search />
            <div className="content">
                <PlanetList />
                <NewPlanetForm />
            </div>
        </div>
    )
}

export default Registry;