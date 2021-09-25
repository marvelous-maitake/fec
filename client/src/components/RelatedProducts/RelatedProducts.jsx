import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import axios from 'axios';
import Carousel from '../Carousel';
import ProductCard from '../ProductCard';
import styled from 'styled-components';

const StyledDivider = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImg = styled.img`
  width: 25vw;
`

const RelatedProducts = () => {
  const { productId, theme } = useContext(SharedContext);

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

  const isDarkTheme = theme === 'dark';

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>you might also like...</h2>
      <StyledDivider>{isDarkTheme? <StyledImg src='https://i.imgur.com/ZC0BXZY.png' /> : <StyledImg src='https://i.imgur.com/EqtyDcb.png' />}</StyledDivider>
      {isLoaded ? <Carousel products={relatedProducts} mode='RelatedProducts'>
        {relatedProducts.map((product) => (
          <ProductCard key={product} product_id={product} mode='RelatedProducts'/>
        ))}
      </Carousel> : <img src='https://i.imgur.com/7sMnF66.gif' />}
    </>
  )
}

export default RelatedProducts;