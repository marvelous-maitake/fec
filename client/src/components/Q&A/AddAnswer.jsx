import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddAnswerModal = styled.div`
  position:fixed;
  height: 50vh;
  width: 50vh;
  top: 25%;
  left: 25%;
  background-color: #9D9D9D;
  padding: 50px;
  z-Index: 999;
  opacity: 0.9;
  border-radius: 30px;
`;

const AddAnswer = ({ isPopup, onClose, questionId }) => {
  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleAnswerBodyChange = (e) => {
    setAnswerBody(e.target.value);
  }

  const handleNicknameChange = (e) => {
    setNickname(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      console.log('form sumbit!')
      // send the data to API
      const newAnswer = {
        body: answerBody,
        name: nickname,
        email: email,
        // photo: photo
      };
      axios.post(`/qa/questions/${questionId}/answers`, newAnswer)
      .then((res) => {
        console.log('new answer was sent to API:', res.data)
      })
      .catch(console.log)
      onClose();
    }
  }

  // check validation before submit
  const validationCheck = () => {
    if (!answerBody) {
      alert('Please Provide Your Answer');
    } else if (!nickname) {
      alert('Please Provide Your Nickname')
    } else if (!email) {
      alert('Please Provide Your Email')
    } else {
      return true;
    }
  }

  if (!isPopup) return null;
  return (
    <AddAnswerModal>
      <div className="add-answer-modal">
        <h1 className="form-header">
          Submit Your Answer
        </h1>
        <form
          className="add-answer-form"
          onSubmit={handleFormSubmit}
        >
          <p className="answer-text">
            <strong>Your Answer</strong><span className="req-star">*</span>
            <textarea
              className="answer-body"
              value={answerBody}
              maxLength="1000"
              onChange={handleAnswerBodyChange}
              placeholder="Put your answer here"
            >
            </textarea>
          </p>
          <p className="nickname-text">
            <strong>Your Nickname</strong><span className="req-star">*</span>
            <input
              className="nickname-body"
              type="text"
              vlaue={nickname}
              placeholder="Example:jackson11!"
              onChange={handleNicknameChange}
            />
          </p>
          <p className="email-text">
            <strong>Your Email</strong><span className="req-star">*</span>
            <input
              className="email-body"
              type="text"
              vlaue={email}
              placeholder="Why did you like the product or not"
              onChange={handleEmailChange}
            />
          </p>
          <button type="submit">Submit Answer</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </AddAnswerModal>
  );
}

export default AddAnswer;