import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import App from 'App';

test('home work as expected', async () => {
  const { container } = render(<App />);
  const logo = await waitFor(
    () => container.querySelector('.App-logo')
  )
  expect(logo).not.toBeNull();
});

test('search form could be used', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox');
  const button = await screen.findByRole('button')

  fireEvent.change(input, {target: { value: 'Matrix' }})
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).not.toBeNull();
})