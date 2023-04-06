import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../reducers/SearchReducer';
import classes from './SearchBar.module.css';
import debounce from 'lodash.debounce';

function SearchBar() {
  const queryRef = useRef('');
  const [searchVisible, setSearchVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(setSearchQuery(queryRef.current));
    }, 500),
    []
  );

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;
    queryRef.current = newQuery;
    debouncedSearch(newQuery);
  };

  useEffect(() => {
    if(searchVisible){
      queryRef.current.focus();
    }
  },[searchVisible])

  return (
    <div className={classes.search_container}>
      {searchVisible && (
        <div className={classes.search_field}>
          <input type="text" placeholder="Search..." ref={queryRef} onChange={handleQueryChange} />
        </div>
      )}
      {!searchVisible && (
        <div className={classes.search_icon} onClick={toggleSearch}>
          <i className="fa fa-search"></i>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
