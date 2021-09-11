import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery.js';
import Details from './Details/Details.js';
import ProductTile from './ProductTile/ProductTile.js';
import Wrapper from './Wrapper.js';


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
    });
  }, []);

  return(
    <div className='Overview'>
      <Wrapper>
        <ImageGallery photos={loaded ? styles.results[currStyle].photos : [{0: {thumbnail: '', url: ''}}]}/>
        <ProductTile />
      </Wrapper>
      <Details slogan={info.slogan} description={info.description}/>
    </div>
  )

}