import React from 'react';
import styled from 'styled-components';

const Qhelpful = styled.div`
  font-size: 10px;
`;

const QuestionHelpful = ({ helpfulness }) => (
  <Qhelpful className="question-helpfulness">
    Helpful? Yes({`${helpfulness}`})
  </Qhelpful>
)

export default QuestionHelpful;