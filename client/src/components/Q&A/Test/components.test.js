import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sample from './SampleData.js';
import Search from '../Search.jsx';
import QAwidget from '../QAwidget.jsx';
import Answer from '../Answer.jsx';
import AddAnswer from '../AddAnswer.jsx';
import Question from '../Question.jsx';
import QuestionList from '../QuestionList.jsx';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
// import fetch from "node-fetch";

const questions = sample.questions.results;


test('renders the Search', async () => {
  const div = document.createElement('div');
  await ReactDOM.render(<Search />, div);
});

test('test Question list', async () => {
  const div = document.createElement('div');
  await ReactDOM.render(<QuestionList
    questions={questions}
    searchInput={null}
    product_id={12345}/>, div);
});

// test 'SHOW MORE QUESTION' BUTTON
test('on initial render, the Show More Question button is worked', async () => {
  render (<QAwidget />);

  expect(await screen.findByRole('button', {name: /SHOW MORE QUESTIONS/i})).toBeEnabled();
});

// test 'Add Answer' modal
test('Submit button should enable after fill the modoal', async () => {
  render (<AddAnswer isPopup={true} onClose={false} />);

  // userEvent.type(screen.getByPlaceholderText(/Put your answer here/i), 'Yes')
  // this is not work
  userEvent.type(screen.getByPlaceholderText(/Example:jackson11!/i), 'nickname1')
  userEvent.type(screen.getByPlaceholderText(/Why did you like the product or not/i), 'testemail@email.com')
  expect(await screen.getByRole('button', {name: /Submit Answer/i})).toBeEnabled();
});
