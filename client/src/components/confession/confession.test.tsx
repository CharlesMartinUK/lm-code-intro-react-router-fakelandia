import { render, screen } from '@testing-library/react';
import Confession from './confession';

test('Confession: does element appear in text?', () => {
  render(<Confession />);  
  const linkElement = screen.getByText(/its very difficult to catch/i);
  expect(linkElement).toBeInTheDocument();
});


test('Confession: submit button disabled at start', () => {
  render(<Confession />);  
  const button = screen.getByRole("button");
  expect(button).toHaveAttribute('disabled');
});
