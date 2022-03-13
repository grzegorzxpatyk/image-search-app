import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import UnsplashImage from '../components/UnsplashImage';
import './Results.scss';

export default function Results() {
    const [imgs, setImgs, onEnter, query, setQuery, searchParams] =
        useOutletContext();

    return (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column overflow-auto">
            <SearchBar setQuery={setQuery} onEnter={onEnter} />
            <h1>{searchParams.get('query')}</h1>
            <div className="imgs">
                {imgs.map((img) => (
                    <UnsplashImage {...img} key={img.id} />
                ))}
            </div>
        </div>
    );
}

{
    /* <img src={img.url} alt={img.alt} key={img.id} /> */
}
