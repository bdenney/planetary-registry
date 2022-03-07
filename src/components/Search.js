import React from "react"

function Search() {
    return (
        <div>
            <input type="text" onChange={() => console.log("Searching...")} placeholder="Search..."/>
        </div>
    );
}

export default Search;