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
  align-items: baseline;
`

export default function RelatedProducts({ product_id }) {
  const [loaded, setLoaded] = useState(false);
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
      setLoaded(true);
    })
    .catch(err => console.error(err));
  }, [product_id]);

  return (
    <div>
      <h1>Related Products</h1>
      <StyledRelatedProducts>
        {loaded ? relatedProducts.map((product) => (
          <RelatedProductCard key={product} product_id={product} />
        )) : (<div>Loading...</div>)}
      </StyledRelatedProducts>
    </div>
  )
}