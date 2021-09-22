import React, { useState }from 'react';
import styled from 'styled-components';
import QuestionHelpful from './QuestionHelpful';
import Answer from './Answer';
import AddAnswer from './AddAnswer';

const MoreAnswerBtn = styled.div`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 10px;
  margin: 10px;
`;

const QContainer = styled.div`
  color: #7F7C82;
  font-size: 14px;
  margin: 5px;
  float: right;
`;

const addAnswerStyle =  {
  color: "#7F7C82",
  margin: "5px",
  backgroundColor: "#fff",
  cursor: "pointer",
  borderColor: "#F8F0DF",
  float: "right",
}


const Question = ({ question }) => {
  const [addAnswer, setAddAnswer] = useState(false);
  const [QHelpfulness, setQHelpfulness] = useState(question.question_helpfulness);
  const [answerCounter, setAnswserCounter] = useState(2)

  // create an answer array
  const answerKey = Object.keys(question.answers);
  const answerList = answerKey.map(key => question.answers[key]);

  return (
    <div role="question-obj" className={question}>
      <span className="question-item">
        <h3>
          Q: {question.question_body}
        </h3>
        <QContainer>
          <span>
          <QuestionHelpful
            questionId={question.question_id}
            helpfulness={QHelpfulness}
          />
          </span>
          <button style={addAnswerStyle} onClick={() => setAddAnswer(true)}>Add Answer</button>
        </QContainer>
        <AddAnswer
          questionId={question.question_id}
          isPopup={addAnswer}
          onClose={() => {setAddAnswer(false)}}
        />
      </span>
      <div className="answer-list" data-testid="answer-list">
        {answerList
          .sort((a, b) => (b.helpfulness - a.helpfulness))
          .slice(0, answerCounter)
          .map(answer => (
          <Answer
            answerObj={answer}
            key={answer.id}
          />
        ))}
      </div>
      {answerList.length > 2 && answerList.length > answerCounter
      ?
        <MoreAnswerBtn
          role="more-answer-btn"
          className="load-more-answer-btn"
          onClick={() => {setAnswserCounter( answerCounter + 2)}}
          >
          <strong>SHOW MORE ANSWERS</strong>
          </MoreAnswerBtn>
      : answerList.length <= answerCounter && answerList.length > 2
        ?
          <MoreAnswerBtn
          role="more-answer-btn"
          className="load-more-answer-btn"
          onClick={() => {setAnswserCounter(2)}}
          >
          <strong>COLLAPSE ANSWERS</strong>
          </MoreAnswerBtn>
      : null }
    </div>

  )
}

export default Question;