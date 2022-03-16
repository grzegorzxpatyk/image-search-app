import React from 'react';
import AppLogo from './AppLogo';
import SearchBar from './SearchBar';
import './Header.scss';

function Header({ setQuery, onEnter, searchParams }) {
    return (
        <header className="d-flex flex-column align-items-start justify-content-between">
            <AppLogo />
            <SearchBar setQuery={setQuery} onEnter={onEnter} />
            {searchParams.get('query') && (
                <h1 className="query">{searchParams.get('query')}</h1>
            )}
        </header>
    );
}

export default Header;
