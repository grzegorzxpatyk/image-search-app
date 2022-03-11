import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import './App.scss';

function App() {
    const [images, setImages] = useState();
    let [searchParams, setSearchParams] = useSearchParams();
    // let query = searchParams.get('query') || '';

    return (
        <div
            id="App"
            className="d-flex justify-content-center align-items-center flex-column text-center text-dark bg-light h-100"
        >
            {/* <nav className="d-flex flex-row justify-content-evenly w-100 fixed-top">
                <NavLink to="/">Search</NavLink>
                <NavLink to="/results">Results</NavLink>
            </nav> */}
            <Outlet />
        </div>
    );
}

export default App;
