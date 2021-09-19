import React from 'react';
import './ImageGalleryItem.css';


function ImageGalleryItem({ pictures, onClick }) {
    const handleClick = e => {
        onClick(e.target.getAttribute('data-source'));
    }
    return (
        <ul className="ImageGallery">
            {pictures.map((picture, idx) => {
                return (
                    < li key={idx} className="ImageGalleryItem" >
                        <img src={picture.webformatURL} data-source={picture.largeImageURL} alt={picture.tag} className="ImageGalleryItem-image" onClick={handleClick} />
                    </li >
                )
            })}
        </ul>
    )

}

export default ImageGalleryItem;

