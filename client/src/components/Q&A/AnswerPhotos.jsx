import React from 'react';

const AnswerPhotos = ( { answer } ) => (
  <div className="answer-photos">
    {answer.photos.map( (photo, index) => {
      return (
        <div className="photo" key={index}>
          <img
            src={photo}
            height='75'
            width='75'
          />
        </div>
      )
    })}
  </div>
);

export default AnswerPhotos;