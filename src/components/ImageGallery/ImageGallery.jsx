import './ImageGallery.css';
import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';



function ImageGallery({ pictures, getLargeImage }) {
    
    
    return (
        <ul className="ImageGallery">
            {pictures.map((picture) => <ImageGalleryItem key={uuidv4()}
            webformatURL={picture.webformatURL} largeImageURL={picture.largeImageURL} tag={picture.tags} getLargeImage={getLargeImage}
            />)}
        </ul>
    )    
}

export default ImageGallery;

