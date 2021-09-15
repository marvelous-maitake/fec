import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledRelatedProductCard = styled.div`
  height: 200px;
  width: 150px;
  overflow: hidden;
`

const StyledPreviewImage = styled.img`
  height: 200px;
  width: auto;
`

export default function RelatedProductCard({ product_id }) {
  const [loaded, setLoaded] = useState(false);
  const [previewImage, setPreviewImage] = useState(() => '');
  const [name, setName] = useState(() => '');
  const [category, setCategory] = useState(() => '');
  const [price, setPrice] = useState(() => '');
  const [salePrice, setSalePrice] = useState(() => '');

  function getStyles(product_id) {
    return axios.get(`/products/${product_id}/styles`);
  }

  function getProductInfo(product_id) {
    return axios.get(`/products/${product_id}`);
  }

  useEffect(() => {
    Promise.all([
      getProductInfo(product_id),
      getStyles(product_id)
    ])
    .then(([info, styles]) => {
      setCategory(info.data.category);
      setName(info.data.name);
      setPreviewImage(styles.data.results[0].photos[0].thumbnail_url);
      setPrice(styles.data.results[0].original_price);
      setSalePrice(styles.data.results[0].sale_price);
      setLoaded(true);
    })
  }, [product_id]);

  return (
    <StyledRelatedProductCard>
      {loaded ? (<div>{category}<br></br>
      {name}<br></br>
      ${price}<br></br>
      <StyledPreviewImage src={previewImage}></StyledPreviewImage></div>) :
      (<div></div>)}
    </StyledRelatedProductCard>)
}