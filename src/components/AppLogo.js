import React from 'react';
import { NavLink } from 'react-router-dom';
import { appName } from '../App';

function AppLogo() {
    return (
        <>
            <h4 className="app-logo">
                <NavLink to="/" className="d-flex align-items-center">
                    <span
                        style={{ fontSize: '2.2rem' }}
                        className="material-icons material-icons-outlined"
                    >
                        camera
                        {/* monochrome_photos */}
                    </span>
                    {appName.charAt(0).toUpperCase() + appName.slice(1)}
                </NavLink>
            </h4>
        </>
    );
}

export default AppLogo;
