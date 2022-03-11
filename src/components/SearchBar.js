import React from 'react';
import './SearchBar.scss';

export default function SearchBar({ value, onChange, onEnter }) {
    return (
        <>
            <input
                type="search"
                name="search-bar"
                id="search-bar"
                placeholder="Search..."
                onKeyUp={onEnter}
                onChange={onChange}
                value={value}
                className="mb-5"
            />
        </>
    );
}
