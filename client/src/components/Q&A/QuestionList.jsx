import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './Question';
import MoreQuestion from './MoreQuestion';

const QuestionItem = styled.div`
  border-bottom: solid black 1px;
  padding: 15px;
  margin-bottom: 10x
`;

const MoreAnswerBtn = styled.div`
  text-decoration: underline;
  cursor: pointer;
  padding: 15px;
`;


const QuestionList = ({ product_id, questions, searchInput, questionCounter}) => {
  const [answerCounter, setAnswserCounter] = useState(2)

  return (
    <div className="question-list">
      <div>
        {questions.slice(0, questionCounter)
          .map((question, index) => (
            <QuestionItem className="question-item" key={index}>
              <div>
                <Question
                  product_id={product_id}
                  answerCounter={answerCounter}
                  question={question}
                  key={question.question_id}
                />
              </div>
            </QuestionItem>
          ))
        }
      </div>
      <MoreAnswerBtn
        className="load-more-answer-btn"
        onClick={() => {setAnswserCounter(answerCounter + 2)}}
      >
        <strong>LOAD MORE ANSWERS</strong>
      </MoreAnswerBtn>
    </div>

  );
}

export default QuestionList;