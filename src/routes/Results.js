import React, { useEffect } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Results() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [imgs, setImgs, onEnter] = useOutletContext();

    // useEffect(() => {
    //     console.log(imgs);
    // });
    // let query = searchParams.get('query');

    // async function fetchData(query) {
    //     const response = await fetch('');
    // }

    return (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column overflow-auto">
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
            <div className="imgs">
                {imgs.map((img) => (
                    <img src={img.url} alt={img.altDescription} key={img.url} />
                ))}
            </div>
        </div>
    );
}
