import React from 'react';
import './SearchBar.scss';

export default function SearchBar({ onEnter }) {
    return (
        <input
            type="search"
            name="search-bar"
            id="search-bar"
            placeholder="Search..."
            onKeyUp={onEnter}
        />
    );
}
