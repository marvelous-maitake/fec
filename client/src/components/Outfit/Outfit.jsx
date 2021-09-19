import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import styled from 'styled-components';
import axios from 'axios';
import OutfitCard from './OutfitCard';
import Carousel from '../Carousel';

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
  text-align: center;
  vertical-align: middle;
  line-height: 48px;
`

const StyledLeftArrow = styled(Arrow)`
  left: 0px;
`

const StyledRightArrow = styled(Arrow)`
  right: 0px;
`

const Outfit = () => {
  const { productId, setProductId, currentOutfit, setCurrentOutfit } = useContext(SharedContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => 0);

  const next = () => {
    if (currentIndex < (currentOutfit.length - 4)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  }

  useEffect(() => {
    setCurrentIndex(0);
    setIsLoaded(true);
  }, [currentOutfit]);

  return (
    <div>
      <h4>YOUR OUTFIT</h4>
      {isLoaded ? <Carousel products={currentOutfit} mode='Outfit'>
        <OutfitCard product_id='addToOutfit' />
        {currentOutfit.map((product) => (
          <OutfitCard key={product} product_id={product} />
        ))}
      </Carousel> : <div></div>}
    </div>
  )
}

export default Outfit;