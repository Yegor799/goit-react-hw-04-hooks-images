import React from 'react';
import './ImageGalleryItem.css'

function ImageGalleryItem({ pictures }) {
    console.log(pictures);
    return (
        <ul className="ImageGallery">
            {pictures.map((picture, idx) => {
                return (
                    < li key={idx} className="ImageGalleryItem" >
                        <img src={picture.webformatURL} data-source={picture.largeImageURL} alt={picture.tag} className="ImageGalleryItem-image" />
                    </li >
                )
            })}
        </ul>
    )

}

export default ImageGalleryItem;

