import React from 'react';
import './UnsplashImage.scss';

export default function UnsplashImage({ urls, alt, id, onClick }) {
    return (
        <div className="image-container" key={id}>
            <img src={urls.small} alt={alt} onClick={onClick} />
        </div>
    );
}
