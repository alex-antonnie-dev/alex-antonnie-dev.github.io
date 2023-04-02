import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from './actions/imagesActions';

const ImageGrid = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);
  const page = useSelector(state => state.images.page);

  useEffect(() => {
    dispatch(fetchImages(page));
  }, [dispatch, page]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;
    if (scrollTop + windowHeight >= fullHeight) {
      dispatch(fetchImages(page + 1));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      {images.map(image => (
        <img src={image.src} alt={image.alt} key={image.id} />
      ))}
    </div>
  );
};

export default ImageGrid;