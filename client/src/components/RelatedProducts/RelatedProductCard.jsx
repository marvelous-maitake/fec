import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import styled from 'styled-components';
import axios from 'axios';

const StyledRelatedProductCard = styled.div`
  text-align: center;
`

const StyledCardContainer = styled.div`
  text-align: center;
  max-width: 15vw;
  min-width: 15vw;
  vertical-align: middle;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 4%;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const StyledThumbnail = styled.div`
  background-color: gray;
  height: 13vw;
  width: 13vw;
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

  const Price = () => (
    <span>${price}</span>
  );

  const SalePrice = () => (
    <>
      <span style={{color: 'red'}}><strong>${salePrice}</strong></span> <s><Price/></s>
    </>
  );

  return (
    <>
      {isLoaded && <StyledRelatedProductCard>
        <StyledCardContainer onClick={() => {
          setProductId(product_id);
        }}>
          <StyledThumbnail style={{ backgroundImage: `url(${previewImage})` }}>
          </StyledThumbnail>
          <br></br>
          {salePrice ? <SalePrice /> : <Price />}
          <br></br>
          {name}
          <br></br>
          {category}
        </StyledCardContainer>
      </StyledRelatedProductCard>}
    </>)
}