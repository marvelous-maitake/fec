import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

const StyledRelatedProducts = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const StyledCarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const StyledCarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

const StyledCarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const StyledCarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: calc(100% / 4);

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  padding: 20px 50px;
`

const Arrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
`

const StyledLeftArrow = styled(Arrow)`
  left: 24px;
`

const StyledRightArrow = styled(Arrow)`
  right: 24px;
`

const RelatedProducts = () => {
  const { productId } = useContext(SharedContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState(() => {
    return [];
  });
  const [currentIndex, setCurrentIndex] = useState(() => 0);

  function getRelatedProducts(productId) {
    return axios.get(`/products/${productId}/related`)
  }

  const next = () => {
    if (currentIndex < (relatedProducts.length - 4)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  }

  useEffect(() => {
    getRelatedProducts(productId)
    .then(results => {
      setRelatedProducts(results.data);
      setCurrentIndex(0);
      setIsLoaded(true);
    })
    .catch(err => console.error(err));
  }, [productId]);

  return (
    <div>
      <h1>Related Products</h1>
      <StyledCarouselContainer>
        <StyledCarouselWrapper>
          {currentIndex > 0 &&
          <StyledLeftArrow onClick={prev}>&lt;</StyledLeftArrow>}
            <StyledCarouselContentWrapper>
              <StyledCarouselContent style={{ transform: `translateX(-${currentIndex * (300 / 4)}%)` }}>
                {isLoaded && relatedProducts.map((product) => (
                  <RelatedProductCard key={product} product_id={product} setCurrentIndex={setCurrentIndex} />
                ))}
              </StyledCarouselContent>
            </StyledCarouselContentWrapper>
          {currentIndex < (relatedProducts.length - 4) &&
          <StyledRightArrow onClick={next}>&gt;</StyledRightArrow>}
        </StyledCarouselWrapper>
      </StyledCarouselContainer>
    </div>
  )
}

export default RelatedProducts;