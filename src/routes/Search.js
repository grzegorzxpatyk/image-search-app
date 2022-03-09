import React from 'react';
import SearchBar from '../components/SearchBar';

function Search() {
    function onEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            alert('Enter pressed! input: ' + event.target.value);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column text-center text-white bg-dark">
            <h1>This is app.js</h1>
            <SearchBar onEnter={onEnter} />
        </div>
    );
}

export default Search;
