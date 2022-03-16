import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import UnsplashImage from '../components/UnsplashImage';
import ModalImage from '../components/ModalImage';
import Header from '../components/Header';
import './Results.scss';

export default function Results() {
    const [imgs, setImgs, onEnter, query, setQuery, searchParams] =
        useOutletContext();
    let [modalShow, setModalShow] = useState({});
    useEffect(() => {
        imgs.forEach((img) => {
            setModalShow((prev) => ({ ...prev, [`M_${img.id}`]: false }));
        });
        return () => {
            setModalShow({});
        };
    }, [imgs]);

    return (
        <div className="results-container">
            <Header
                setQuery={setQuery}
                onEnter={onEnter}
                searchParams={searchParams}
            />
            <main>
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
            </main>
        </div>
    );
}
