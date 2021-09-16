import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Qhelpful = styled.div`
  font-size: 15px;
  text-dec
`;

const helpfulnessStyle = {
  textDecoration: "underline",
  cursor: "pointer"
}

const QuestionHelpful = ({ helpfulness, questionId }) => {
  const [QHelpfulness, setQHelpfulness] = useState(helpfulness)
  const [isHelpful, setIsHelpful] = useState(false)

  const handleQHelpfulnessClicked = (e) => {
    console.log('isHelpful clicked', questionId);
    setIsHelpful(!isHelpful);
    isHelpful ? setQHelpfulness(QHelpfulness - 1) : setQHelpfulness(QHelpfulness + 1);
    if (!isHelpful) {
      axios.put(`/qa/questions/${questionId}/helpful`)
        .then(() => console.log('should add 1'))
        .catch(console.log)
    }
  };

  return (
    <Qhelpful className="question-helpfulness">
      <div>
        <span>Helpful?</span>
        <span> | </span>
        <span className="q-helpfulness" style={helpfulnessStyle} onClick={handleQHelpfulnessClicked}> Yes({QHelpfulness})</span>
      </div>
    </Qhelpful>
  );
};

export default QuestionHelpful;