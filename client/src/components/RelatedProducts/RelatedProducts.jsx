import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

const StyledRelatedProducts = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
`

export default function RelatedProducts({ product_id }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState(() => {
    return [];
  });

  function getRelatedProducts(product_id) {
    return axios.get(`/products/${product_id}/related`)
  }

  useEffect(() => {
    getRelatedProducts(product_id)
    .then(results => {
      setRelatedProducts(results.data);
      setIsLoaded(true);
    })
    .catch(err => console.error(err));
  }, [product_id]);

  return (
    <div>
      <h1>Related Products</h1>
      <StyledRelatedProducts>
        {isLoaded && relatedProducts.map((product) => (
          <RelatedProductCard key={product} product_id={product} />
        ))}
      </StyledRelatedProducts>
    </div>
  )
}