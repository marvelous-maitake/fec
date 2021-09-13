import React from 'react';
import Question from './Question.jsx';

const QuestionList = ({ product_id, questions }) => (
  <div className="question-list">
    {questions.map((question, index) => (
      <Question
        question={question}
        key={index}
      />
    ))}
  </div>
);

export default QuestionList;