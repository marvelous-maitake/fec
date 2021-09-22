import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import styled from 'styled-components';
import axios from 'axios';
import Star from './RelatedProducts/Star';
import Modal from './Modal';
import ComparisonTable from './RelatedProducts/ComparisonTable';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledProductCard = styled.div`
  text-align: center;
  position: relative;
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

const StyledButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 1.5vw;
  height: 1.5vw;
  z-index: 1;
`

const ProductCard = ({ product_id, mode }) => {
  const isOutfit = mode === 'Outfit';
  const isAddButton = product_id === 'addToOutfit';

  const { productId, setProductId, setCurrentOutfit } = useContext(SharedContext);

  const [previewImage, setPreviewImage] = useState(() => '');
  const [name, setName] = useState(() => '');
  const [category, setCategory] = useState(() => '');
  const [price, setPrice] = useState(() => '');
  const [salePrice, setSalePrice] = useState(() => null);
  const [isLoaded, setIsLoaded] = useState(() => false);
  const [isModalOpen, setIsModalOpen] = useState(() => false);

  const getStyles = (product_id) => {
    return axios.get(`/products/${product_id}/styles`);
  }

  const getProductInfo = (product_id) => {
    return axios.get(`/products/${product_id}`);
  }

  const handleAdd = () => {
    setCurrentOutfit((prevOutfit) => {
      if (!prevOutfit.includes(productId)) {
        let newOutfit = prevOutfit.slice();
        newOutfit.unshift(productId);
        return newOutfit;
      } else {
        return prevOutfit;
      }
    })
  }

  const handleRemoval = (e) => {
    e.stopPropagation();
    setCurrentOutfit((prevOutfit) => {
      let newOutfit = prevOutfit.slice();
      let removalIndex = newOutfit.indexOf(product_id);
      newOutfit.splice(removalIndex, 1);
      return newOutfit;
    })
  }

  const toggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(prevState => !prevState);
  }

  useEffect(() => {
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
      {isModalOpen && (
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ComparisonTable />
      </Modal>
      )}
      {isAddButton ?  <StyledProductCard>
        <StyledCardContainer onClick={handleAdd}>
          <StyledThumbnail>
            <span>Add to Outfit<br />
            +
            </span>
            <p> </p>
            <p> </p>
            <p> </p>
          </StyledThumbnail>
        </StyledCardContainer>
      </StyledProductCard> :
      isLoaded ? <StyledProductCard>
        <StyledCardContainer onClick={() => {
          setProductId(product_id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <StyledThumbnail style={{ backgroundImage: `url(${previewImage})` }}>
            {isOutfit ? <StyledButton onClick={handleRemoval}>x</StyledButton> : <div onClick={toggleModal}>
              <Star />
            </div>}
          </StyledThumbnail>
          <br />
          {salePrice ? <SalePrice /> : <Price />}
          <br />
          {name}
          <br />
          {category}
        </StyledCardContainer>
      </StyledProductCard> : <div></div>}
    </>)
}

export default ProductCard;