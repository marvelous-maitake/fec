import React, {useState} from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  flex: 3;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 2%;
  border-radius: 25px;
  max-height: 80vh;
  width: 65vw;
  height: 80 vw;
  object-fit: scale-down;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90%;
  object-fit: scale-down;
`;
const Photo = styled.img`
  max-width: 90%;
  object-fit: scale-down;
  height: auto;
  max-height: 90%;
  border-radius: 25px;
`;

const Arrow = styled.span`
  flex: 1;
  font-size: 5vh;
  cursor: pointer;
  text-align: center;
`;

const Thumbnails = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  gap: 1%;
`;

const ActiveThumbnail = styled.div`
  height: 80px;
  border-radius: 25px;
  width: 80px;
  border: solid green 2px;
  cursor: pointer;
  background-image: url(${props => props.src});
  background-size: cover;
`;

const Thumbnail = styled.div`
  height: 80px;
  border-radius: 25px;
  width: 80px;
  cursor: pointer;
  background-image: url(${props => props.src});
  background-size: cover;
`;
export default function ImageGallery({ photos }) {

  const [current, setCurrent] = useState(0);

  const nextPhoto = (e) => {
    e.preventDefault();
    setCurrent(current + 1);
  }

  const prevPhoto = (e) => {
    e.preventDefault();
    setCurrent(current - 1);
  }

  const handleThumbnail = (e) => {
    e.preventDefault();
    setCurrent(parseInt(e.target.id));
  }

  return (
    <Gallery>
      <Carousel>
        {current !== 0 ? <Arrow onClick={(e) => prevPhoto(e)}>&#8592;</Arrow> : <Arrow/>}
        {photos.map((photo, index) => (
          index === current && (<Photo key={index} src={photo.url} alt='' />)
        ))}
        {current !== photos.length-1 ? <Arrow onClick={(e) => nextPhoto(e)}>&#8594;</Arrow>: <Arrow/>}
      </Carousel>
      <Thumbnails>
        {photos.map((photo, index) => (
          index === current ?
          (<ActiveThumbnail key={index} id={index} src={photo.thumbnail_url}/>) :
          (<Thumbnail key={index} id={index} src={photo.thumbnail_url} onClick={(e) => handleThumbnail(e)}/>)
        ))}
      </Thumbnails>
    </Gallery>
   );
}