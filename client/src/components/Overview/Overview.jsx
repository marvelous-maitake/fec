import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductTile from './ProductTile/ProductTile.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  height: 80vh;
  gap: 4%;
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