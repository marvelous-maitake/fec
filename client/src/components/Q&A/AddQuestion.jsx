import React, { useState } from 'react';

const AddQuestion = () => {
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
    console.log('form sumbit!')
  }

  // handle input
  return (
    <div className="add-question-modal">
      <h3 className="form-header">
        Ask Your Question
      </h3>
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
    </div>
  )
};

export default AddQuestion;