import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './Question';
import MoreQuestion from './MoreQuestion';

const QuestionItem = styled.div`
  border-bottom: solid black 1px;
  padding: 15px;
  margin-bottom: 10x
`;

const QuestionList = ({ product_id, questions, searchInput, counter, answerCounter}) => (
  <div className="question-list">
    {questions.slice(0, counter)
      .map((qObj, index) => (
        <QuestionItem className="question-item">
          <div>
            <Question
            product_id={product_id}
            answerCounter={answerCounter}
            question={qObj}
            key={qObj.question_id}
            />
          </div>
        </QuestionItem>
      ))
    }
  </div>
);

export default QuestionList;