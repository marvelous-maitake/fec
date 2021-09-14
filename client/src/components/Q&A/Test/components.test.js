import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import Search from '../Search.jsx';
import QAwidget from '../QAwidget.jsx';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
// import fetch from "node-fetch";

test('renders the Search', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
});