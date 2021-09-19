import './SearchBar.css';
import {useState} from 'react';
import { toast } from 'react-toastify';

function SearchBar ({onSubmit}) {
    
  const[searchRequest, setSearchRequest] = useState('');

  const handleRequestChange = e => {

      setSearchRequest(e.currentTarget.value.toLowerCase())       
  }
    
   const handleRequestSubmit = e => {
        e.preventDefault();

        if (searchRequest.trim() === '') {
        toast.error('Введите запрос.');
        return;
    }

    onSubmit(searchRequest);
    setSearchRequest('');
    }

    
    return (
<header className="Searchbar">
  <form className="SearchForm" onSubmit={handleRequestSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={searchRequest}
      onChange={handleRequestChange}
    />
  </form>
</header>
    )
        
}

export default SearchBar;