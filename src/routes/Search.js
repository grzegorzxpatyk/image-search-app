import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Search() {
    const [imgs, setImgs, onEnter, query, setQuery] = useOutletContext();

    return (
        <>
            <h1 className="text-lowercase mb-5">image-search-app</h1>
            <div className="container">
                <SearchBar setQuery={setQuery} onEnter={onEnter} />
            </div>
        </>
    );
}
