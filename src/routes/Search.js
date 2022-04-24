import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Header from '../components/Header';
import Fade from 'react-reveal/Fade';
import './Search.scss';
import { appName } from '../App';

export default function Search() {
    const [imgs, setImgs, onEnter, query, setQuery, searchParams, unsplashApi] =
        useOutletContext();
    let [backgroundUrl, setBackgroundUrl] = useState('');
    let [backgroundAuthorName, setBackgroundAuthorName] = useState('');
    let [backgroundAuthorProfile, setBackgroundAuthorProfile] = useState('');
    let [bgLoaded, setBgLoaded] = useState(false);

    function handleLoad() {
        setTimeout(() => {
            setBgLoaded(true);
        }, 1000);
    }

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 10);
        unsplashApi.search
            .getPhotos({
                query: 'wallpaper',
                orientation: 'landscape',
                per_page: 10,
            })
            .then((result) => {
                console.log(result);

                setBackgroundUrl(result.response.results[randomNum].urls.full); //Math.floor(Math.random() * 5)
                setBackgroundAuthorName(
                    result.response.results[randomNum].user.name
                );
                setBackgroundAuthorProfile(
                    result.response.results[randomNum].user.links.html
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
        <Fade when={bgLoaded}>
            <div
                style={{
                    background: `lightgray 100vw`,
                }}
                className="search-container"
            >
                <img src={backgroundUrl} alt="" onLoad={handleLoad} />
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
        </Fade>
    );
}
