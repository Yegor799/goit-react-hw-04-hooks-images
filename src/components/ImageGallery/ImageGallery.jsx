import './ImageGallery.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const API_KEY = '18976162-4407e31cd80a0810b100a4c9f';


function ImageGallery ({searchRequest}) {

    const [pictures, setPictures] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (searchRequest === '') {
            return
        }
        
        const loadPictures = async () => {
    try {
      setStatus('pending');
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchRequest}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
       
      setPictures((pictures) => [...pictures, ...response.data.hits]);
      setError('');
    } catch (error) {
      setError('Error while loading data. Try again later.');
    } finally {
      setStatus('resolved');
    }
        };
        loadPictures();
    }, [page, searchRequest]);

    useEffect(() => {
        setPage(1);
        setPictures('');
    }, [searchRequest])

    
        if (status === 'idle') {
            return <h1 className="ImageGallery__title">Enter your request</h1>
        }
    
        if (status === 'pending' && page !== 1) {
        setStatus('resolved')
        }

        if (status === 'pending') {
            return (
                <Loader type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} />
            )       
        }

        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        }

        if (status === 'resolved') {
            return (
                <>
                    {pictures.length === 0
                        ? <h2 className="ImageGallery__title">No results were found for your search</h2>
                        : <ImageGalleryItem pictures={pictures} />}
                    { pictures.length > 1 && <Button onClick={() => setPage(page => page + 1)} />}

                </>
            )
        }
    
    
    
}

export default ImageGallery;

