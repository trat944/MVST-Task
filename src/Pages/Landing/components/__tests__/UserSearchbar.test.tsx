import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserSearchbar } from '../UserSearchbar';

test('renders input and button', () => {
  render(
    <Router>
      <UserSearchbar setUsers={() => {}} users={[]} setButtonTrigger={() => {}} />
    </Router>
  );

  const inputElement = screen.getByPlaceholderText(/Enter a username/i);
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});

test('shows error message when input is empty and form is submitted', () => {
  render(
    <Router>
      <UserSearchbar setUsers={() => {}} users={[]} setButtonTrigger={() => {}} />
    </Router>
  );

  const buttonElement = screen.getByText(/Search/i);
  fireEvent.click(buttonElement);

  const errorMessage = screen.getByText(/It cannot be empty/i);
  expect(errorMessage).toBeInTheDocument();
});