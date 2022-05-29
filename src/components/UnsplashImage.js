import React from 'react';
import './UnsplashImage.scss';

export default function UnsplashImage({ urls, alt, id, onClick }) {
    console.log(id);
    return (
        <div className="img-container">
            <img key={id} src={urls.regular} alt={alt} onClick={onClick} />
        </div>
    );
}
