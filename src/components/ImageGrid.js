import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions/imagesActions';
import ImageItem from './ImageItem';
import SearchBar from './SearchBar';

const ImageGrid = () => {
  const [pageChange, setPageChange] = useState(1);
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);
  const page = useSelector(state => state.images.page);
  console.log('page', page);
  
  useEffect(() => {
    dispatch(fetchImages(pageChange));
  }, [pageChange]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;
    if (scrollTop + windowHeight >= fullHeight) {
      // dispatch(fetchImages(page+1));
      setPageChange((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <SearchBar />
      {images.map(image => (
        <ImageItem title={image.name} image={image['poster-image']} />
      ))}
    </div>
  );
};

export default ImageGrid;