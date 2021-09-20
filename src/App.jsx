import {useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

const API_KEY = '18976162-4407e31cd80a0810b100a4c9f';

function App () {
  
  const [searchRequest, setSearchRequest] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
        if (searchRequest === '') {
            return
        }
        
        const loadPictures = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchRequest}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
       
      setPictures((pictures) => [...pictures, ...response.data.hits]);
      setError('');
    } catch (error) {
      setError('Error while loading data. Try again later.');
    } finally {
      setIsLoading(false);
    }
    };
        loadPictures();
      
  }, [page, searchRequest]);
  
   useEffect(() => {
        setPage(1);
        setPictures('');
    }, [searchRequest]);


  const toggleModal = () => {
    setShowModal(!showModal);        
  }

  const handleClick = data => {
    setLargeImage(data);
    toggleModal();
  }  

    
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <SearchBar onSubmit={setSearchRequest} />
        {isLoading && <Loader type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} />}
        {error && <h2>{error}</h2>}
        {pictures.length > 0 && <ImageGallery pictures={pictures} getLargeImage={handleClick} />}
        {pictures.length > 1 && <Button onClick={() => setPage(page => page + 1)} />} 
        {showModal && <Modal largeImage={largeImage} onClose={toggleModal} />}

      </div>
    )
  
}

export default App;
