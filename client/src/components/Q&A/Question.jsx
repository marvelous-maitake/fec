import React from 'react';
import { useState } from 'react';
import QuestionHelpful from './QuestionHelpful.jsx';
import Answer from './Answer.jsx';

const Question = ({ question }) => {

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
        {answerList.map(answer => (
          <Answer
            answerObj={answer}
            key={answer.id}
          />
        ))}
      </div>
      {/* <button className="more-answers-btn">
        <strong>
          MORE ANSWERED QUESTIONS
        </strong>
      </button> */}
    </div>

  )
}

export default Question;