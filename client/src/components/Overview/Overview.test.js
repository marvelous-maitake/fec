import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import '@testing-library/jest-dom';
import Overview from './Overview';
import fixtures from './fixtures.json';
import { SharedContext } from '../../contexts/SharedContext';

const server = setupServer(
  rest.get(`/products/48432`, (req, res, ctx) => {
    return res(ctx.json(fixtures.product));
  }),
  rest.get(`/products/48432/styles`, (req, res, ctx) => {
    return res(ctx.json(fixtures.styles));
  })
)

const customRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <NameContext.Provider {...providerProps}>{ui}</NameContext.Provider>,
    renderOptions,
  )
}

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders overview component', async () => {
  render(<Overview />);
  const linkElement =  await screen.findByRole('link', {name: /Read all Reviews/i});
  expect(linkElement).toBeInTheDocument();
});