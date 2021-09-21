import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import Selectors from './Selectors.jsx';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 80vh;
  grid-template-areas:
    "ImageGallery ProductTile";
  height: 80vh;
  gap: 4%;

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 4%;
    border-radius: 10px;
  }
`;

export default function Overview() {

  const { productId } = useContext(SharedContext);

  const [styles, setStyles] = useState(null);
  const [currStyle, setCurrStyle] = useState(null);

  const defaultStyle = (s) => {
    let styleIndex = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i]['default?']) {
        styleIndex = i;
        break;
      }
    }
    return styleIndex;
  };

  useEffect(() => {
    axios.get( `/products/${productId}/styles`)
    .then(r => {
      setStyles(r.data.results);
      setCurrStyle(defaultStyle(r.data.results))
    })
    .catch(err => console.log('get info error, ', err));
  }, [productId]);

  return (
    <Wrapper className='Overview'>
      {currStyle !== null ?
      (<>
        <ImageGallery
        photos={styles[currStyle].photos.map(x => x.url)}
        />
        <div className='ProductCard card'>
          <ProductInfo />
          <Selectors
          thumbnails={styles.map(x => x.photos[0].thumbnail_url)}
          setCurrStyle={setCurrStyle}
          style={styles[currStyle]}
          currStyle={currStyle}
          />
        </div>
      </>) :
      (<div></div>)
      }
    </Wrapper>
  );
}