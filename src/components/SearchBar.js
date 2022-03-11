import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.scss';

export default function SearchBar({ value, onChange }) {
    let navigate = useNavigate();
    let location = useLocation();
    let [imgs, setImgs] = useState([]);

    function onEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log('Enter pressed! input: ' + event.target.value);
            navigate('/results' + location.search);

            const apiRoot = 'https://api.unsplash.com';
            const accessKey = process.env.REACT_APP_ACCESSKEY;

            axios
                .get(
                    `${apiRoot}/search/photos?client_id=${accessKey}&query=${value}&count=10`
                )
                .then((response) => {
                    console.log(response);
                    response.data.results.forEach((result) => {
                        setImgs((prevImgs) => [...prevImgs, result.urls.small]);
                    });
                });
        }
    }

    return (
        <>
            <input
                type="search"
                name="search-bar"
                id="search-bar"
                placeholder="Search..."
                onKeyUp={onEnter}
                onChange={onChange}
                value={value}
            />
            <div className="imgs">
                {imgs.map((img) => (
                    <img src={img} key={img} />
                ))}
            </div>
        </>
    );
}
