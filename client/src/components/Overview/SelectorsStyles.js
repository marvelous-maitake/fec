import styled from 'styled-components';

const Thumbnails = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2%;
`;

const ActiveThumbnail = styled.div`
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  cursor: pointer;
  background-image: url(${props => props.src});
  background-size: cover;
  border: solid pink 4px;
`;

const Thumbnail = styled.div`
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  cursor: pointer;
  background-image: url(${props => props.src});
  background-size: cover;
  border: solid 2px;
`;

const CartForm = styled.div`
  display: flex;
  gap: 2%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const Select = styled.select`
  width: 30%;
  height: 35px;
  background: white;
  padding-left: 5px;
  font-size: 14px;
`;

const CartBtn = styled.button`
  margin: auto;
`;

export { Thumbnails, ActiveThumbnail, Thumbnail, CartForm, Select, CartBtn };