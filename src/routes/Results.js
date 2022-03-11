import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Results() {
    let [searchParams, setSearchParams] = useSearchParams();
    // let query = searchParams.get('query');

    // async function fetchData(query) {
    //     const response = await fetch('');
    // }

    return (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
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
            />
        </div>
    );
}
