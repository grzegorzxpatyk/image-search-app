import axios from 'axios';
import React, { useState } from 'react';
import {
    Outlet,
    useSearchParams,
    useNavigate,
    useLocation,
} from 'react-router-dom';
import './App.scss';

function App() {
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    let location = useLocation();
    let [imgs, setImgs] = useState([]);
    let query = searchParams.get('query') || '';

    function onEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log('Enter pressed! input: ' + event.target.value);
            navigate('/results' + location.search);

            const apiRoot = process.env.REACT_APP_APIROOT;
            const accessKey = process.env.REACT_APP_ACCESSKEY;

            setImgs(() => []);

            axios
                .get(
                    `${apiRoot}/search/photos?client_id=${accessKey}&query=${query}&count=10`
                )
                .then((response) => {
                    console.log(response);
                    response.data.results.forEach((result) => {
                        setImgs((prevImgs) => [
                            ...prevImgs,
                            {
                                url: result.urls.small,
                                altDescription: result.alt_description,
                            },
                        ]);
                    });
                });
        }
    }

    return (
        <div
            id="App"
            className="h-100 w-100 d-flex justify-content-center align-items-center flex-column text-center text-dark bg-light"
        >
            {/* <nav className="d-flex flex-row justify-content-evenly w-100 fixed-top">
                <NavLink to="/">Search</NavLink>
                <NavLink to="/results">Results</NavLink>
            </nav> */}
            <Outlet context={[imgs, setImgs, onEnter]} />
        </div>
    );
}

export default App;
