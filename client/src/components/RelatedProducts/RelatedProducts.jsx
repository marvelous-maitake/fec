import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
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

function RelatedProducts() {
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
      setRelatedProducts(results.data);
      setIsLoaded(true);
    })
    .catch(err => console.error(err));
  }, [productId]);

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

export default RelatedProducts;