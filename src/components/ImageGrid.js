import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions/imagesActions';

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
      console.log('yesss',scrollTop, windowHeight, fullHeight);
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
      {images.map(image => (
        <div style={{ width: '25%', padding: '10px' }}>
          <img src={`https://karthikacreations.in/assets/images/dg_images/${image['poster-image']}`} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;