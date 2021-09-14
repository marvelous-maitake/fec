import React from 'react';
import Question from './Question.jsx';
import MoreQuestion from './MoreQuestion.jsx';

const QuestionList = ({ product_id, questions, searchInput }) => (
  <div className="question-list">
    {questions.slice(0, 5)
      .map((qObj, index) => (
        index > 2
        ? <MoreQuestion
            quesitons={questions}
            key={index}
          />
        : <Question
            question={qObj}
            key={qObj.question_id}
          />
      ))
    }
  </div>
)


export default QuestionList;