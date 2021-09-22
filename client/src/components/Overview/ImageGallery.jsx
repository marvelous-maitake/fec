import React, {useState} from 'react';
import styled from 'styled-components';
import { Gallery, Carousel, Arrow, Thumbnails, ActiveThumbnail, Thumbnail } from './ImageGalleryStyles';

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
    <Gallery src={photos[current]} id='Gallery'>
      <Carousel id='Carousel'>
        {current !== 0 ? <Arrow onClick={(e) => prevPhoto(e)}>&#8592;</Arrow> : <Arrow/>}
        <Thumbnails>
          {photos.map((url, index) => (
            index === current ?
            (<ActiveThumbnail key={index} id={index} src={url}/>) :
            (<Thumbnail key={index} id={index} src={url} onClick={(e) => handleThumbnail(e)}/>)
          ))}
        </Thumbnails>
        {current !== photos.length-1 ? <Arrow onClick={(e) => nextPhoto(e)}>&#8594;</Arrow>: <Arrow/>}
      </Carousel>

    </Gallery>
   );
}