import React from 'react';
import './UnsplashImage.scss';

export default function UnsplashImage({ urls, alt, id, onClick }) {
    return <img key={id} src={urls.regular} alt={alt} onClick={onClick} />;
}
