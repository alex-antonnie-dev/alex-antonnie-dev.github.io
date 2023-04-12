import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../reducers/SearchReducer';
import classes from './SearchBar.module.css';
import debounce from 'lodash.debounce';
import {Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const queryRef = useRef('');
  const [searchVisible, setSearchVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleBackBtn = () => {
    navigate('/home')
  }

  useEffect(() => {
    if(searchVisible){
      queryRef.current.focus();
    }
  },[searchVisible])

  return (
    <Row className={classes.search_container} style={{'width':'100%'}}>
    <Col xs={6} sm={7} style={{'paddingLeft':'0px'}}>
      <i className={`fa fa-arrow-left ${classes.back_icon}`} onClick={handleBackBtn}></i>
    Romantic Comedy
    </Col>
    <Col xs={6} sm={5}>
      {searchVisible && (
        <div>
          <Form.Control style={{'backgroundColor': '#333','color': '#fff'}} type="text" placeholder="Search..." ref={queryRef} onChange={handleQueryChange} />
        </div>
      )}
      {!searchVisible && (
        <div onClick={toggleSearch} className={classes.search_icon}>
          <i className="fa fa-search" style={{'float':'right'}}></i>
        </div>
      )}
    </Col>
    </Row>

  );
}

export default SearchBar;
