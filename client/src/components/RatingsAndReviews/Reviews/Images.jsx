import React, {useState} from 'react';

export default function Images({review}) {
  const [viewer, setViewer] = useState(false);
  const [image, setImage] = useState(null);

  function onClick(e) {
    setViewer(!e.target.active);
    e.target.active = !e.target.active;
    setImage(e.target.src);
  }

  return (
    <>
      {viewer && <img src={image} width="500"/>}
      {review.photos.map(photo => (
        <span key={photo.id}>
          <img onClick={onClick} style={{margin: "5px"}} active={false} src={photo.url}  height="50" width="50" />
        </span>
      ))}
    </>
  )
}