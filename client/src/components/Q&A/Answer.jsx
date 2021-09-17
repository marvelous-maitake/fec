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
  const [isReported, setIsReported] = useState(false);

  const handAHelpfulClick = (e) => {
    setHelpfulSubmit(!helpfulSubmit);
    if (!helpfulSubmit) {
      axios.put(`/qa/answers/${answerObj.id}/helpful`)
        .then(setAHelpfulness(aHelpfulness + 1))
        .catch(console.log)
    } else {
      setAHelpfulness(aHelpfulness - 1);
    }
  }

  const handleIsReportedClicked = (e) => {
    setIsReported(true);
  }

  return (
    <div className="answer-container">
      <div className="answer-item">
        <div className="answer-body">
          A: {answerObj.body}
        </div>
        <span>
          by {answerObj.answerer_name}, {moment(answerObj.date).utc().format('MMMM D, YYYY')} <span> | </span>
        </span>
        <span>Helpful?</span>
        <span> | </span>
        <span className="answer-helpfulness" style={beforeClickedStyle} onClick={handAHelpfulClick}> Yes({aHelpfulness}) </span><span> | </span>
        {
          isReported ? <span style={afterClickedStyle} className="answer-not-report">  Reported  </span>
                      : <span style={beforeClickedStyle} className = "answer-reported" onClick = {handleIsReportedClicked}> Report </span>
        }
        <div className="answer-photo-container">
          {answerObj.photos.length ? <AnswerPhotos answer={answerObj}/> : null}
        </div>
      </div>
    </div>
  );
};


export default Answer;