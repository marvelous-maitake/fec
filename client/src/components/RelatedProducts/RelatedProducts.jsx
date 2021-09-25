import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import axios from 'axios';
import Carousel from '../Carousel';
import ProductCard from '../ProductCard';

const RelatedProducts = () => {
  const { productId } = useContext(SharedContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState(() => {
    return [];
  });

  function getRelatedProducts(productId) {
    return axios.get(`/products/${productId}/related`)
  }

  useEffect(() => {
    getRelatedProducts(productId)
    .then(results => {
      let unique = [...new Set(results.data)];
      setRelatedProducts(unique);
      setIsLoaded(true);
    })
    .catch(err => console.error(err));
  }, [productId]);

  return (
    <>
      <h4>RELATED PRODUCTS</h4>
      {isLoaded ? <Carousel products={relatedProducts} mode='RelatedProducts'>
        {relatedProducts.map((product) => (
          <ProductCard key={product} product_id={product} mode='RelatedProducts'/>
        ))}
      </Carousel> : <img src='https://i.imgur.com/7sMnF66.gif' />}
    </>
  )
}

export default RelatedProducts;