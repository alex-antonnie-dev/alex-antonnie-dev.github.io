import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../reducers/SearchReducer';
import classes from './SearchBar.module.css';
// import './searchBar.css';
// import {searchIcon} from '../constants/icons';
import debounce from 'lodash.debounce';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // const handleSearch = () => {
  //   dispatch(setSearchQuery(query));
  // };

  const debouncedSearch = useCallback(
    debounce((query) => {
    dispatch(setSearchQuery(query));

    }, 500),
    []
  );

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  return (
    // <div className={classes.search_bar}>
    //   <input
    //     type="text"
    //     placeholder="Search images"
    //     value={query}
    //     onChange={handleQueryChange}
    //   />
    //   {/* <button onClick={handleSearch}>Search</button> */}
    // </div>

    <div className={classes.search_container}>
      
      {searchVisible && (
        <div className={classes.search_field}>
          <input type="text" placeholder="Search..." value={query} onChange={handleQueryChange}/>
        </div>
      )}
      {!searchVisible && 
      <div className={classes.search_icon} onClick={toggleSearch}>
        <i className="fa fa-search"></i>
      </div>
      }
    </div>
  );
}

export default SearchBar;
