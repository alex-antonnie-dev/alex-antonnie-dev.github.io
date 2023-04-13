import { useState,useRef } from 'react';
import {useSelector} from 'react-redux';
import {Image} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import classes from './ImageItem.module.css';

const ImageItem = (props) => {
    const imgRef = useRef();
    const searchQuery = useSelector((state) => state.search.query);
    const defaultImageURL = 'https://karthikacreations.in/assets/images/dg_images/placeholder_for_missing_posters.png?v=1.1';

    const checkImage = (ev) => {
      // to check whether the image exist or not and to fallback to default image is not exist
      const naturalWidth = imgRef.current.naturalWidth;
      const naturalHeight = imgRef.current.naturalHeight;
      if (naturalWidth === 0 || naturalHeight === 0) {
        fallBackImage(ev);
      }
    }

    const fallBackImage = (ev)=> {
      //function to set default props to image if url is valid
     ev.target.src = defaultImageURL;
     ev.target.alt = 'Image not available';
    }
  
    if (searchQuery && !props.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }
  
    return (
        <Col xs={4} md={3} className={classes.image_item}>
          <Image src={`https://karthikacreations.in/assets/images/dg_images/${props.image}`} ref={imgRef} onLoad={checkImage} alt={props.title} onError={fallBackImage} fluid style={{ width: '182px' }} />
        <p title={props.title} className={classes.title}>{props.title}</p>
      </Col>
    );
  }

  export default ImageItem;
  