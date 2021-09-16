import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import styled from 'styled-components';
import axios from 'axios';

const StyledRelatedProductCard = styled.div`
  text-align:center;
`

const StyledThumbnail = styled.div`
  background-color: gray;
  height: 200px;
  width: 200px;
  overflow: hidden;
  display: inline-block;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

export default function RelatedProductCard({ product_id, setCurrentIndex }) {
  const { setProductId } = useContext(SharedContext);

  const [previewImage, setPreviewImage] = useState(() => '');
  const [name, setName] = useState(() => '');
  const [category, setCategory] = useState(() => '');
  const [price, setPrice] = useState(() => '');
  const [salePrice, setSalePrice] = useState(() => null);
  const [isLoaded, setIsLoaded] = useState(() => false);

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
      setIsLoaded(true);
    })
    .catch((err) => console.error(err));
  }, [product_id]);

  const SalePrice = () => (
    <span>${salePrice} <s>${price}</s></span>
  );

  const Price = () => (
    <span>${price}</span>
  );

  return (
    <StyledRelatedProductCard>
      {isLoaded && <div onClick={() => {
        setProductId(product_id);
      }}>
        <StyledThumbnail style={{ backgroundImage: `url(${previewImage})` }}/>
        <br></br>
        {salePrice ? <SalePrice /> : <Price />}
        <br></br>
        {name}
        <br></br>
        {category}
      </div>}
    </StyledRelatedProductCard>)
}