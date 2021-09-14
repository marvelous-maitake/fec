import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import QuestionHelpful from './QuestionHelpful';
import Answer from './Answer';

// const Helpful = styled.helpful`
//   font-size: 10px;
// `;

const Question = ({ question, answerCounter }) => {

  // create an answer array
  let answerKey = Object.keys(question.answers);
  let answerList = answerKey.map(key => question.answers[key]);


  return (
    <div className={question}>
      <span className="question-item">
        <strong>
          Q: {question.question_body}
        </strong>
        <QuestionHelpful
          helpfulness={question.question_helpfulness}
        />
      </span>
      <div className="answer-list">
        {answerList
          .slice(0, answerCounter)
          .map(answer => (
          <Answer
            answerObj={answer}
            key={answer.id}
          />
        ))}
      </div>

    </div>

  )
}

export default Question;