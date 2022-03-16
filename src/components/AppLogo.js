import React from 'react';
import { NavLink } from 'react-router-dom';
import { appName } from '../App';
import './AppLogo.scss';

function AppLogo() {
    return (
        <>
            <h4 className="app-logo">
                <NavLink
                    to="/"
                    className="d-flex align-items-center flex-wrap justify-content-center"
                >
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
