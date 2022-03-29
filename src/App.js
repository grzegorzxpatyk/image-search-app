import React, { useState } from 'react';
import {
    Outlet,
    useSearchParams,
    useNavigate,
    useLocation,
    createSearchParams,
} from 'react-router-dom';
import { createApi } from 'unsplash-js';
import './App.scss';

function App() {
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    let location = useLocation();
    let [imgs, setImgs] = useState([]);
    let [numberOfResults, setNumberOfResults] = useState();
    let [query, setQuery] = useState();

    const accessKey = process.env.REACT_APP_ACCESSKEY;
    const unsplashApi = createApi({
        accessKey: accessKey,
    });
    function onEnter(event) {
        event.preventDefault();

        setImgs(() => []);
        setNumberOfResults(undefined);
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

        unsplashApi.search
            .getPhotos({
                query: query,
                page: 1,
                perPage: 12,
                orientation: 'squarish',
            })
            .then((result) => {
                console.log(result);
                result.response.results.forEach((result) => {
                    setImgs((prevImgs) => [
                        ...prevImgs,
                        {
                            id: result.id,
                            urls: result.urls,
                            alt: result.alt_description,
                            createdat: result.created_at,
                            user: result.user,
                        },
                    ]);
                });
                setNumberOfResults(result.response.total);
            })
            .catch((error) => {
                console.log(
                    '%csomething went wrong!',
                    'color: red; font-size: 50px; display: flex; justify-content: center; padding: 10px; background-color: yellow'
                );
                console.error(error);
            });
    }

    return (
        <div id="App">
            <Outlet
                context={[
                    imgs,
                    setImgs,
                    onEnter,
                    query,
                    setQuery,
                    searchParams,
                    unsplashApi,
                    numberOfResults,
                ]}
            />
        </div>
    );
}

export default App;
export const appName = 'image-search-app';
