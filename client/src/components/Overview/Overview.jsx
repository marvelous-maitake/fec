import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductTile from './ProductTile/ProductTile.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 80vh;
  grid-template-areas:
    "ImageGallery ProductTile"
  height: 80vh;
  gap: 4%;

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 4%;
    border-radius: 10px;
  }
`;

export default function Overview({ product_id, getInfo, getStyles }) {

  const [info, setInfo] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currStyle, setCurrStyle] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      getInfo(product_id),
      getStyles(product_id)
    ])
    .then(([info, styles]) => {
      setInfo(info);
      setStyles(styles);
      const def = (s) => {
        let styleIndex = 0;
        for (var i = 0; i < s.length; i++) {
          if (s[i]['default?']) {
            styleIndex = i;
            break;
          }
        }
        return styleIndex;
      };
      setCurrStyle(def(styles.results));
      setLoaded(true);
    })
    .catch((err) => console.log('error in promises', err));
  }, []);

  return (
    <div className='Overview'>
      <Wrapper>
        {loaded ? (<ImageGallery photos={styles.results[currStyle].photos}/>) : (<div></div>)}
        {loaded ? (<ProductTile info={info} styles={styles.results} currStyle={currStyle} setCurrStyle={setCurrStyle}/>) : (<div></div>)}
      </Wrapper>
    </div>
  )

}