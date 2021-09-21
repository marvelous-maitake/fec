import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import AnswerPhotos from './AnswerPhotos';

const beforeClickedStyle = {
  textDecoration: "underline",
  cursor: "pointer"
}

const afterClickedStyle = {
  fontWeight: "bold",
  cursor: "pointer"
}

const Answer = ({ answerObj }) => {
  const [aHelpfulness, setAHelpfulness] = useState(answerObj.helpfulness);
  const [helpfulSubmit, setHelpfulSubmit] = useState(false);

  const handAHelpfulClick = (e) => {
    if (!helpfulSubmit) {
      axios.put(`/qa/answers/${answerObj.id}/helpful`)
      .then(setAHelpfulness(aHelpfulness + 1))
      .catch(console.log)
    }
    setHelpfulSubmit(true);
  }

  return (
    <div className="answer-item">
      <p>
        <span><strong>A: </strong>{answerObj.body}</span>
      </p>
      <span>by {answerObj.answerer_name},  {moment(answerObj.date).utc().format('MMMM D, YYYY')} <span> | </span></span>
      <span>Helpful?</span>
      {helpfulSubmit
        ? <span className="answer-helpfulness" style={afterClickedStyle} onClick={handAHelpfulClick}> Yes({aHelpfulness})</span>
        : <span className="answer-helpfulness" style={beforeClickedStyle} onClick={handAHelpfulClick}> Yes({aHelpfulness}) </span>}
      {answerObj.photos.length ? <AnswerPhotos answer={answerObj}/> : null}
    </div>
  );
};


export default Answer;