import React, { useEffect } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Search() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [imgs, setImgs, onEnter] = useOutletContext();

    return (
        <>
            <h1 className="text-lowercase mb-5">image-search-app</h1>
            <SearchBar
                value={searchParams.get('query') || ''}
                onChange={(event) => {
                    let query = event.target.value;
                    if (query) {
                        setSearchParams({ query });
                    } else {
                        setSearchParams({});
                    }
                }}
                onEnter={onEnter}
            />
        </>
    );
}
