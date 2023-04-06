import {useSelector} from 'react-redux';
import classes from './ImageItem.module.css';

function ImageItem({  title, image }) {
    const searchQuery = useSelector((state) => state.search.query);

    const addDefaultSrc = (ev)=> {
     ev.target.src = 'https://karthikacreations.in/assets/images/dg_images/poster1.jpg';
    }
  
    if (searchQuery && !title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }
  
    return (
        <div className={classes.image_item} style={{ width: '25%', padding: '10px' }}>
        <img src={`https://karthikacreations.in/assets/images/dg_images/${image}`} alt={title} onError={addDefaultSrc}/>
        <p>{title}</p>
      </div>
    );
  }

  export default ImageItem;
  