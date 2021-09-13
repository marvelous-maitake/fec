import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import App from '../../client/src/App.jsx';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
// import fetch from "node-fetch";

test('renders the app', async () => {
  render(<App />);
  screen.debug();
  // const outfitTitle = await screen.findByTestId('App')
  // expect(outfitTitle.toHaveTextContent('Your Outfit Carousel'))
  // expect(screen.findByTestId('App').toHaveTextContent('Your Outfit Carousel'))
});