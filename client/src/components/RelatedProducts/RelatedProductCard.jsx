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
  const [previewImage, setPreviewImage] = useState(() => {
    return '';
  })

  function getProductImages(product_id) {
    axios.get(`/products/${product_id}/styles`)
    .then(results => {
      setPreviewImage(results.data.results[0].photos[0].thumbnail_url);
    });
  }

  useEffect(() => {
    // get category
    // get name
    // get price
    // get star rating
    // get product images
    getProductImages(product_id);
  }, []);

  return (
    <StyledRelatedProductCard>
      Product #{product_id}<br></br>
      <StyledPreviewImage src={previewImage}></StyledPreviewImage>
    </StyledRelatedProductCard>
  )

}