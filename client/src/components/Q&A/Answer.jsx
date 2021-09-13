import React from 'react';
import moment from 'moment';

const Answer = ({ answerObj }) => (
  <div className="answer-container">
    <div className="answer-item">
      <p className="answer-body">
        A: {answerObj.body}
      </p>
      <p>
        <>by {answerObj.answerer_name}, {moment(answerObj.date).utc().format('MMMM D, YYYY')}</>
      </p>
    </div>
  </div>
)

export default Answer;