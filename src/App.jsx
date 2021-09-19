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

  // handleClick = e => {
  //   if (e.target.nodeName !== 'IMG') {
  //     return;
  //   }

  //   this.toggleModal();
  //   this.setState({ largeImage: e.target.getAttribute('data-source') })
  // }


  

    
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <SearchBar onSubmit={handleSubmit} />
        <ImageGallery searchRequest={searchRequest} />
        {/* {showModal && <Modal largeImage={largeImage} onClose={toggleModal} />} */}

      </div>
    )
  
}

export default App;
