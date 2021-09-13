import React from 'react';
import { useState } from 'react';

const MoreQuestion = ({ questions }) => {
  const [isCollapseQuestions, setIsCollapseQuestions] = useState(true);

  return (
    <div className="more-questions-container">
      {
        isCollapseQuestions
        ? <>
          <button
            className="more-questions-btn"
            onClick={() => {setIsCollapseQuestions(!isCollapseQuestions)}}
          >
            <strong>MORE ANSWERED QUESTIONS</strong>
          </button>
          </>
        : <>
            {questions.slice(3).map(qObj => {
              return (
                <Question
                  question={qObj}
                  key={qObj.question_id}
                />
              )
            })}
            <>
              <button
                className="more-questions-btn"
                onClick={() => {setIsCollapseQuestions(!isCollapseQuestions)}}
              >
                <strong>
                  COLLAPSE QUESTIONS
                </strong>
              </button>
            </>
          </>
      }
    </div>
  );
};

export default MoreQuestion;