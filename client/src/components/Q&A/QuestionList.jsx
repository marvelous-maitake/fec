import React from 'react';
import Question from './Question';
import MoreQuestion from './MoreQuestion';

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
    <div>
      <button><strong>MORE ANSWERS</strong></button>
    </div>
  </div>
)


export default QuestionList;