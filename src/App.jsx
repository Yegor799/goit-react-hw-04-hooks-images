import {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

function App () {
  
  const [searchRequest, setSearchRequest] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  // componentDidMount() {

  //   window.addEventListener('click', this.handleClick);
  // }

  // componentWillUnmount() {

  //   window.addEventListener('click', this.handleClick);
  // }

  
   const handleSubmit = searchRequest => {
    setSearchRequest(searchRequest);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  //   if (this.state.showModal === false) {
  //     this.setState({ largeImage: '' })
  //   }
  // };

  const handleClick = data => {    
    toggleModal();
    setLargeImage(data);
  }

  


  

    
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <SearchBar onSubmit={handleSubmit} />
        <ImageGallery searchRequest={searchRequest} getLargeImage={handleClick} />
        {showModal && <Modal largeImage={largeImage} onClose={toggleModal} />}

      </div>
    )
  
}

export default App;
