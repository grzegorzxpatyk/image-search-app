import axios from 'axios';
import React, { useState } from 'react';
import {
    Outlet,
    useSearchParams,
    useNavigate,
    useLocation,
    createSearchParams,
} from 'react-router-dom';
import './App.scss';

function App() {
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    let location = useLocation();
    let [imgs, setImgs] = useState([]);
    let [query, setQuery] = useState();

    function onEnter(event) {
        event.preventDefault();

        const apiRoot = process.env.REACT_APP_APIROOT;
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        setImgs(() => []);
        if (query) {
            if (location.pathname === '/') {
                navigate({
                    pathname: 'results',
                    search: `?${createSearchParams({ query: query })}`,
                });
            } else if (location.pathname === '/results') {
                setSearchParams({ query });
            }
        } else {
            setSearchParams({});
            navigate({ search: `` });
        }

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
                            id: result.id,
                            url: result.urls.small,
                            alt: result.alt_description,
                        },
                    ]);
                });
            });
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
            <Outlet
                context={[
                    imgs,
                    setImgs,
                    onEnter,
                    query,
                    setQuery,
                    searchParams,
                ]}
            />
        </div>
    );
}

export default App;
