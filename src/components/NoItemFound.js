import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function NoItemFound(props) {
    useEffect(() => {
        props.onLoad();
    },[props])
  return (
    <h5>
        <Alert variant="primary" style={{textAlign:'center'}}>
        {props.message || 'No item found.'}
        </Alert>
    </h5>

  );
}

export default NoItemFound;