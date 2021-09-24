import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  cursor: pointer;
`

const StyledLeftArrow = styled(Arrow)`
  left: 0px;
`

const StyledRightArrow = styled(Arrow)`
  right: 0px;
`

const Carousel = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => 0);
  const isOutfit = props.mode === 'Outfit';

  const next = () => {
    if (currentIndex < (isOutfit ? props.products.length - 3 : props.products.length - 4)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  }

  return (
    <StyledCarouselContainer>
      <StyledCarouselWrapper>
        {currentIndex > 0 &&
        <StyledLeftArrow onClick={prev}>&lt;</StyledLeftArrow>}
          <StyledCarouselContentWrapper>
            <StyledCarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {props.children}
            </StyledCarouselContent>
          </StyledCarouselContentWrapper>
        {currentIndex < (isOutfit ? props.products.length + 1 : props.products.length) - 4 &&
        <StyledRightArrow onClick={next}>&gt;</StyledRightArrow>}
      </StyledCarouselWrapper>
    </StyledCarouselContainer>
  );
}

export default Carousel;