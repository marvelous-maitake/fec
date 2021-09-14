import React from 'react';

const AnswerPhotos = ( { answer } ) => (
  <div className="answer-photos">
    {answer.photos.map( (photo, index) => {
      return (
        <span className="photo" key={index}>
          <img
            src={photo}
            style={{margin: "5px"}}
            height='75'
            width='75'

          />
        </span>
      )
    })}
  </div>
);

export default AnswerPhotos;