import React from 'react';

export default function Images({review}) {
  return (
    review.photos.map(photo => (
      <span key={photo.id}>
        <img style={{margin: "5px"}} src={photo.url}  height="50" width="50" />
      </span>
    ))
  )
}