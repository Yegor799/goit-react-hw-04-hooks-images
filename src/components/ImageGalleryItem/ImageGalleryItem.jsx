import React from 'react';
import './ImageGalleryItem.css';


function ImageGalleryItem({ webformatURL, largeImageURL, getLargeImage, tag }) {
    
    const handleClick = e => {
       getLargeImage(e.target.getAttribute(["data-source"]))
   }

    return (
        < li className="ImageGalleryItem" >
            <img src={webformatURL} data-source={largeImageURL} alt={tag} className="ImageGalleryItem-image" onClick={handleClick}  />
        </li >
    )      
}

export default ImageGalleryItem;

