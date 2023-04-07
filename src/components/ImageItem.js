import {useSelector} from 'react-redux';
// import classes from './ImageItem.module.css';
import {Image} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function ImageItem({  title, image }) {
    const searchQuery = useSelector((state) => state.search.query);

    const addDefaultSrc = (ev)=> {
     ev.target.src = 'https://karthikacreations.in/assets/images/dg_images/No_Image_Available.jpg';
    }
  
    if (searchQuery && !title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }
  
    return (
        <Col xs={4} md={3} style={{'marginBottom': '20px'}}>
        <Image src={`https://karthikacreations.in/assets/images/dg_images/${image}`} alt={title} onError={addDefaultSrc} fluid style={{ maxWidth: '100%' }} />
        <p>{title}</p>
      </Col>
    );
  }

  export default ImageItem;
  