import React from 'react';
import { NavLink } from 'react-router-dom';
import AppLogo from './AppLogo';
import SearchBar from './SearchBar';

function Header({ setQuery, onEnter, searchParams }) {
    return (
        <header className="container mb-5 d-flex flex-column align-items-start justify-content-between">
            <AppLogo />
            <SearchBar setQuery={setQuery} onEnter={onEnter} />
            {searchParams.get('query') && (
                <h1 className="query">{searchParams.get('query')}</h1>
            )}
        </header>
    );
}

export default Header;
