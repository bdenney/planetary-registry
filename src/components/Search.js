import React from "react"

function Search({filterText}) {

    function handleSearch(event) {
        filterText(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleSearch} placeholder="Search..."/>
        </div>
    );
}

export default Search;