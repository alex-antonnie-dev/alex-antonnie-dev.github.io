import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions/imagesActions';
import ImageItem from './ImageItem';
import SearchBar from './SearchBar';
import { nanoid } from 'nanoid';
import { Row } from 'react-bootstrap';
import { pageLimit } from '../constants/config';
import NoItemFound from './NoItemFound';

const ImageGrid = () => {
  const [pageChange, setPageChange] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);
  const state = useSelector(state => state.images);
  const page  = state.page;
  const searchQuery = useSelector((state) => state.search.query);
  
  useEffect(() => {
    if(pageChange <= pageLimit){
      console.log('dispatch', dispatch(fetchImages(pageChange)));
    }
  }, [pageChange]);

  const changePage = () => {
    setPageChange((prev) => prev + 1)
  }

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;
    if (scrollTop + windowHeight >= fullHeight) {
      changePage();
    }
    // console.log('called');
    // if (window.innerHeight + window.scrollY >= document.body.offsetHeight-1000) {
    //   console.log('inside');
    //   changePage();
    // }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove',handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);


  let itemCount = 0;
  let content = images.map((image) => {
    if (searchQuery && !image.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    } else {
      itemCount++;
      return(
        <ImageItem key={nanoid()} title={image.name} image={image['poster-image']} />
      )
    }
  })

  return (
    <>
      <SearchBar />
      <Row style={{'width':'100%'}}>
        {itemCount == 0 && searchQuery != '' && 
          <NoItemFound message="No results found." onLoad={changePage}/>
        }
        {itemCount > 0 &&
          content
        }
      {/* {images.map(image => (
          <ImageItem key={nanoid()} title={image.name} image={image['poster-image']} />
      ))} */}
    </Row>
    </>
    
  );
};

export default ImageGrid;