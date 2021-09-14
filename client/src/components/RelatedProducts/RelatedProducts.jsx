import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

const StyledRelatedProducts = styled.div`
  border-radius: 50px;
  border: 1px solid black;
  padding: 50px;
  margin: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`

export default function RelatedProducts({ product_id }) {

  const [relatedProducts, setRelatedProducts] = useState(() => {
    return [];
  });

  function getRelatedProducts(product_id) {
    axios.get(`/products/${product_id}/related`)
    .then(results => {
      setRelatedProducts(results.data);
    })
    .catch(err => console.error(err));
  }

  useEffect(() => {
    getRelatedProducts(product_id);
  }, []);

  return (
    <div>
      <h1>Related Products</h1>
      <StyledRelatedProducts>
        {relatedProducts.map((product) => (
          <RelatedProductCard key={product} product_id={product} />
        ))}
      </StyledRelatedProducts>
    </div>
  )

}