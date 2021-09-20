import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';

function ProductInfo({}) {

  const { productId } = useContext(SharedContext);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get( `/products/${productId}`)
    .then(results => {
      setInfo(results.data);
    })
    .catch(err => console.log('get info error, ', err));
  }, [productId]);

  return (
    info !== null ?
    (<div>
      <p><a href='#RatingsAndReviews'>Read all Reviews</a></p>
        <p>CATEGORY {'>'} <em>{info.category}</em></p>
        <h1>{info.name}</h1>
        <p>{info.description}</p>
    </div>) :
    (<div></div>)
  );
}

export default ProductInfo;