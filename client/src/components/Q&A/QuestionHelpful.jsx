import React from 'react';

const QuestionHelpful = ({ helpfulness }) => (
  <div className="question-helpfulness">
    Helpful?
    <div className="helpful-yes-btn">
      Yes({`${helpfulness}`})
    </div>
  </div>
)

export default QuestionHelpful;