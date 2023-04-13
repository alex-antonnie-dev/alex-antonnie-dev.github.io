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
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);
  const searchQuery = useSelector((state) => state.search.query);
  
  useEffect(() => {
    //whenever the page is changed api is initiated to get the next page data and store in redux
    if(pageChange <= pageLimit){
      dispatch(fetchImages(pageChange));
    }
  }, [pageChange]);

  const changePage = () => {
    setPageChange((prev) => prev + 1)
  }

  const handleScroll = () => {
    //function to detect page scrolling and inititate page change
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;
    if (scrollTop + windowHeight >= fullHeight) {
      changePage();
    }
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
      //Image item will only return if the search text matches the title of image if search is not empty
      return null;
    } else {
      //to know the item count matched
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
        {itemCount === 0 && searchQuery !== '' && 
          <NoItemFound className="mt-5" message="No results found." onLoad={changePage}/>
        }
        {itemCount > 0 &&
          content
        }
    </Row>
    </>
    
  );
};

export default ImageGrid;