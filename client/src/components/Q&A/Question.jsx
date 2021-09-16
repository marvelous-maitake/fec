import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import QuestionHelpful from './QuestionHelpful';
import Answer from './Answer';
import AddAnswer from './AddAnswer';


const Question = ({ question, answerCounter }) => {
  const [addAnswer, setAddAnswer] = useState(false);
  const [QHelpfulness, setQHelpfulness] = useState(question.question_helpfulness);

  // create an answer array
  let answerKey = Object.keys(question.answers);
  let answerList = answerKey.map(key => question.answers[key]);

  const handleQHelpfulnessClicked = (e) => {
    console.log('isHelpfull clicked');
  }

  return (
    <div className={question}>
      <span className="question-item">
        <strong>
          Q: {question.question_body}
        </strong>
        <QuestionHelpful
          questionId={question.question_id}
          helpfulness={QHelpfulness}
          />
        <button onClick={() => setAddAnswer(true)}>Add Answer</button>
        <AddAnswer
          isPopup={addAnswer}
          onClose={() => {setAddAnswer(false)}}
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