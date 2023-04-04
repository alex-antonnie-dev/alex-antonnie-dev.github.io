import {useSelector} from 'react-redux';

function ImageItem({  title, image }) {
    const searchQuery = useSelector((state) => state.search.query);
  
    if (searchQuery && !title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }
  
    return (
        <div class='image-item' style={{ width: '25%', padding: '10px' }}>
        <img src={`https://karthikacreations.in/assets/images/dg_images/${image}`} alt={title}/>
        <p>{title}</p>
      </div>
    );
  }

  export default ImageItem;
  