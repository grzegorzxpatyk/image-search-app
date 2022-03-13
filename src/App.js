import axios from 'axios';
import React, { useState } from 'react';
import {
    Outlet,
    useSearchParams,
    useNavigate,
    // useLocation,
} from 'react-router-dom';
import './App.scss';

function App() {
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    // let location = useLocation();
    let [imgs, setImgs] = useState([]);
    let [query, setQuery] = useState();

    // useEffect(() => {
    //     const currentParams = Object.fromEntries([...searchParams]);
    //     console.log(currentParams); // get new values onchange
    // }, [searchParams]);

    async function onEnter(event) {
        // if (event.keyCode === 13) {
        event.preventDefault();

        const apiRoot = process.env.REACT_APP_APIROOT;
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        setImgs(() => []);
        // navigate('/results');
        if (query) {
            navigate({ pathname: '/results', search: `?query=${query}` }); // , search: `?query=${query}`
            // setSearchParams({ query });
            console.log(query);
            console.log('searchParams ' + searchParams.get('query'));
            // navigate('/results' + location.search);
            // navigate(`/results?query=${searchParams.get('query')}`);
            // location.search = `?query=${query}`;
        } else {
            setSearchParams({});
            navigate({ search: `` });
            console.log('else');
        }

        // navigate('/results' + location.search);

        axios
            .get(
                `${apiRoot}/search/photos?client_id=${accessKey}&query=${query}&count=10`
            )
            .then((response) => {
                // console.log(response);
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
        // }
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
            <Outlet context={[imgs, setImgs, onEnter, query, setQuery]} />
        </div>
    );
}

export default App;
