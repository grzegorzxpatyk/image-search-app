import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Results() {
    const [imgs, setImgs, onEnter, query, setQuery] = useOutletContext();

    return (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column overflow-auto">
            <SearchBar setQuery={setQuery} onEnter={onEnter} />
            <div className="imgs">
                {imgs.map((img) => (
                    <img src={img.url} alt={img.altDescription} key={img.url} />
                ))}
            </div>
        </div>
    );
}
