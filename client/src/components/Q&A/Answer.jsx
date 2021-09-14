import React from 'react';
import moment from 'moment';
import AnswerPhotos from './AnswerPhotos';

const Answer = ({ answerObj }) => (
  <div className="answer-container">
    <div className="answer-item">
      <p className="answer-body">
        A: {answerObj.body}
      </p>
      <p>
        <>by {answerObj.answerer_name}, {moment(answerObj.date).utc().format('MMMM D, YYYY')} | Helpful? Yes ({`${answerObj.helpfulness}`}) | Report</>
      </p>
      {answerObj.photos.length > 0 && <AnswerPhotos answer={answerObj}/>}
    </div>
  </div>
)

export default Answer;