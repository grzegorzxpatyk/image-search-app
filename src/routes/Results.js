import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import UnsplashImage from '../components/UnsplashImage';
import ModalImage from '../components/ModalImage';
import './Results.scss';

export default function Results() {
    const [imgs, setImgs, onEnter, query, setQuery, searchParams] =
        useOutletContext();
    let [modalShow, setModalShow] = useState({});
    useEffect(() => {
        imgs.forEach((img) => {
            setModalShow((prev) => ({ ...prev, [`Modal_${img.id}`]: false }));
        });
        return () => {
            setModalShow({});
        };
    }, [imgs]);

    return (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column overflow-auto">
            <SearchBar setQuery={setQuery} onEnter={onEnter} />
            <h1>{searchParams.get('query')}</h1>
            <div className="imgs">
                {imgs.map((img) => (
                    <>
                        <UnsplashImage
                            {...img}
                            key={img.id}
                            onClick={() =>
                                setModalShow((prev) => ({
                                    ...prev,
                                    [`M_${img.id}`]: true,
                                }))
                            }
                        />
                        <ModalImage
                            key={`M_${img.id}`}
                            show={modalShow[`M_${img.id}`]}
                            onHide={() =>
                                setModalShow((prev) => ({
                                    ...prev,
                                    [`M_${img.id}`]: false,
                                }))
                            }
                            {...img}
                        />
                    </>
                ))}
            </div>
        </div>
    );
}

{
    /* <img src={img.url} alt={img.alt} key={img.id} /> */
}
