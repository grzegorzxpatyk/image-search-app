import React, { useState } from 'react';
import './SearchBar.scss';

export default function SearchBar({ setQuery, onEnter }) {
    let [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
        setQuery(value);
    }

    function handleKeyup(event) {
        setValue(event.target.value);
        setQuery(value);
        if (event.keyCode === 13) {
            onEnter(event);
        }
    }

    return (
        <>
            <input
                type="search"
                name="search-bar"
                id="search-bar"
                placeholder="Search..."
                onKeyUp={handleKeyup}
                onChange={handleChange}
                value={value}
            />
        </>
    );
}
