import React from 'react';
import SearchBar from '../components/SearchBar';

function Search() {
    function onEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log('Enter pressed! input: ' + event.target.value);
        }
    }

    return (
        <>
            <h1>This is app.js</h1>
            <SearchBar onEnter={onEnter} />
        </>
    );
}

export default Search;
