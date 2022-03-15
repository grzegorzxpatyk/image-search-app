import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Header from '../components/Header';

export default function Search() {
    const [imgs, setImgs, onEnter, query, setQuery, searchParams] =
        useOutletContext();

    return (
        <>
            <Header
                onEnter={onEnter}
                setQuery={setQuery}
                searchParams={searchParams}
            />
        </>
    );
}
