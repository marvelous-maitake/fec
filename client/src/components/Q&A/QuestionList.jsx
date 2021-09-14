import React from 'react';
import { useState } from 'react';
import Question from './Question';
import MoreQuestion from './MoreQuestion';

const QuestionList = ({ product_id, questions, searchInput, counter, answerCounter}) => (
  <div className="question-list">
    {questions.slice(0, counter)
      .map((qObj, index) => (
        <Question
          answerCounter={answerCounter}
          question={qObj}
          key={qObj.question_id}
        />
      ))
    }
  </div>
);

export default QuestionList;