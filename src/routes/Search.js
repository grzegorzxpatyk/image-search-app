import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Header from '../components/Header';
import './Search.scss';
import { appName } from '../App';

export default function Search() {
    const [imgs, setImgs, onEnter, query, setQuery, searchParams, unsplashApi] =
        useOutletContext();
    let [backgroundUrl, setBackgroundUrl] = useState('');
    let [backgroundAuthorName, setBackgroundAuthorName] = useState('');
    let [backgroundAuthorProfile, setBackgroundAuthorProfile] = useState('');
    useEffect(() => {
        unsplashApi.search
            .getPhotos({
                query: 'landing page',
                color: 'white',
                orientation: 'landscape',
                per_page: 5,
            })
            .then((result) => {
                console.log(result);
                setBackgroundUrl(result.response.results[0].urls.full); //Math.floor(Math.random() * 5)
                setBackgroundAuthorName(result.response.results[0].user.name);
                setBackgroundAuthorProfile(
                    result.response.results[0].user.links.html
                );
            })
            .catch((err) => {
                console.error(err);
            });
        return () => {
            setBackgroundUrl('');
            setBackgroundAuthorName('');
            setBackgroundAuthorProfile('');
        };
    }, []);

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                background: `lightgray url("${backgroundUrl}") 100vw`,
            }}
            className="search-container"
        >
            <Header
                onEnter={onEnter}
                setQuery={setQuery}
                searchParams={searchParams}
            />
            <div className="background-credits">
                Photo by{' '}
                <a
                    href={`${backgroundAuthorProfile}?utm_source=${appName}&utm_medium=referral`}
                    target="_blank"
                    rel="noreferrer"
                >
                    @{backgroundAuthorName}
                </a>{' '}
                on{' '}
                <a
                    href={`https://unsplash.com/?utm_source=${appName}&utm_medium=referral`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Unsplash
                </a>
            </div>
        </div>
    );
}
