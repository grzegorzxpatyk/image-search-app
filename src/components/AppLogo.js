import React from 'react';
import { NavLink } from 'react-router-dom';

function AppLogo() {
    return (
        <>
            <h4 className="app-logo">
                <NavLink to="/">image-search-app</NavLink>
            </h4>
        </>
    );
}

export default AppLogo;
