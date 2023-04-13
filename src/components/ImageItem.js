import { useState,useRef } from 'react';
import {useSelector} from 'react-redux';
import {Image} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const ImageItem = (props) => {
    const imgRef = useRef();
    const searchQuery = useSelector((state) => state.search.query);
    const defaultImageURL = 'https://karthikacreations.in/assets/images/dg_images/placeholder_for_missing_posters.png';

    const checkImage = (ev) => {
      const naturalWidth = imgRef.current.naturalWidth;
      const naturalHeight = imgRef.current.naturalHeight;
      if (naturalWidth === 0 || naturalHeight === 0) {
        fallBackImage(ev);
      }
    }

    const fallBackImage = (ev)=> {
     ev.target.src = defaultImageURL;
     ev.target.alt = 'Image not available';
    }
  
    if (searchQuery && !props.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }
  
    return (
        <Col xs={4} md={3} style={{'marginBottom': '20px'}}>
          <Image src={`https://karthikacreations.in/assets/images/dg_images/${props.image}`} ref={imgRef} onLoad={checkImage} alt={props.title} onError={fallBackImage} fluid style={{ width: '182px' }} />
        <p>{props.title}</p>
      </Col>
    );
  }

  export default ImageItem;
  