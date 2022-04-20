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
                    <span className="material-icons material-icons-outlined">
                        camera
                        {/* monochrome_photos */}
                    </span>
                    {appName.replaceAll('-', ' ')}
                </NavLink>
            </h4>
        </>
    );
}

export default AppLogo;
