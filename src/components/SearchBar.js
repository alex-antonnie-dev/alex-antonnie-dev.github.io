import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../reducers/SearchReducer';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
