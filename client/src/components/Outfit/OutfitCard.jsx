import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../../contexts/SharedContext';
import styled from 'styled-components';
import axios from 'axios';

const StyledOutfitCard = styled.div`
  text-align: center;
`

const StyledCardContainer = styled.div`
  text-align: center;
  max-width: 13vw;
  min-width: 13vw;
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
  height: 12vw;
  width: 12vw;
  overflow: hidden;
  display: inline-block;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const OutfitCard = ({ product_id }) => {
  const { productId, setProductId, setCurrentOutfit } = useContext(SharedContext);

  const [previewImage, setPreviewImage] = useState(() => '');
  const [name, setName] = useState(() => '');
  const [category, setCategory] = useState(() => '');
  const [price, setPrice] = useState(() => '');
  const [salePrice, setSalePrice] = useState(() => null);
  const [isLoaded, setIsLoaded] = useState(() => false);
  const [isModalOpen, setIsModalOpen] = useState(() => false);
  const [isAddButton, setIsAddButton] = useState(() => false);

  const getStyles = (product_id) => {
    return axios.get(`/products/${product_id}/styles`);
  }

  const getProductInfo = (product_id) => {
    return axios.get(`/products/${product_id}`);
  }

  const handleAdd = () => {
    console.log('Clicked!');
    setCurrentOutfit((prevOutfit) => {
      let newOutfit = prevOutfit.slice();
      newOutfit.unshift(productId);
      return newOutfit;
    })
  }

  useEffect(() => {
    if (product_id === 'addToOutfit') {
      setIsAddButton(true);
    }
    if (!isAddButton) {
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
    } else {
      setIsLoaded(true);
    }
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
      { isAddButton ? <StyledOutfitCard>
        <StyledCardContainer>
          <StyledThumbnail>
            <span onClick={handleAdd}>Add to Outfit<br />
            +
            </span>
          </StyledThumbnail>
        </StyledCardContainer>
      </StyledOutfitCard> :
      isLoaded ? <StyledOutfitCard>
        <StyledCardContainer onClick={() => {
          setProductId(product_id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <StyledThumbnail style={{ backgroundImage: `url(${previewImage})` }}>
          </StyledThumbnail>
          <br />
          {salePrice ? <SalePrice /> : <Price />}
          <br />
          {name}
          <br />
          {category}
        </StyledCardContainer>
      </StyledOutfitCard> : <div></div>}
    </>)
}

export default OutfitCard;