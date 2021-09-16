import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddQuestionModal = styled.div`
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

const AddQuestion = ({ open, onClose, product_id, handleQModalSubmit }) => {
  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleQuestionBodyChange = (e) => {
    setQuestionBody(e.target.value);
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
      const newQObj = {
        body: questionBody,
        name: nickname,
        email: email,
        product_id: product_id
      };
      // console.log('new q obj: ', newQObj);
      axios.post('/qa/questions', newQObj)
        .then((res) => {
          console.log('new Q was sent to API:', res.data)
        })
        .catch(console.log)
      onClose();
    }
  }

  // check validation before submit
  const validationCheck = () => {
    if (!questionBody) {
      alert('Please Provide Your Question');
    } else if (!nickname) {
      alert('Please Provide Your Nickname')
    } else if (!email) {
      alert('Please Provide Your Email')
    } else {
      return true;
    }
  }


  if (!open) return null
  return (
    <AddQuestionModal>
      <div className="add-question-modal">
        <h1 className="form-header">
          Ask Your Question
        </h1>
        <form
          className="add-question-form"
          onSubmit={handleFormSubmit}
        >
          <p className="question-text">
            <strong>Your Question</strong><span className="req-star">*</span>
            <textarea
              className="question-body"
              value={questionBody}
              maxLength="1000"
              onChange={handleQuestionBodyChange}
            >
            </textarea>
          </p>
          <p className="nickname-text">
            <strong>Your Nickname</strong><span className="req-star">*</span>
            <input
              className="nickname-body"
              type="text"
              vlaue={nickname}
              placeholder="Exaple:jackson11!"
              onChange={handleNicknameChange}
            />
          </p>
          <p className="email-text">
            <strong>Your Email</strong><span className="req-star">*</span>
            <input
              className="email-body"
              type="text"
              vlaue={email}
              placeholder="Why did you like the product or not?"
              onChange={handleEmailChange}
            />
          </p>
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </AddQuestionModal>
  )
};

export default AddQuestion;