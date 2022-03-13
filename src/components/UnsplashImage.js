import React from 'react';
import './UnsplashImage.scss';

export default function UnsplashImage({ url, alt, id }) {
    return (
        <div className="image-container" key={id}>
            <img src={url} alt={alt} />
        </div>
    );
}
