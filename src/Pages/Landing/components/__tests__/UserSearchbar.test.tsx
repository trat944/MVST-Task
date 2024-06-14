/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserSearchbar } from '../UserSearchbar';
import { User } from 'interfaces/user';

test('renders input and button', () => {
  render(
    <Router>
      <UserSearchbar setUsers={() => {}} users={[]} setButtonTrigger={() => {}} />
    </Router>
  );

  const inputElement = screen.getByPlaceholderText(/Enter a username/i) as HTMLInputElement;
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

test('handles input change', () => {
  render(
    <Router>
      <UserSearchbar setUsers={() => {}} users={[]} setButtonTrigger={() => {}} />
    </Router>
  );

  const inputElement = screen.getByPlaceholderText(/Enter a username/i) as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'testuser' } });

  expect(inputElement.value).toBe('testuser');
});

test('shows no user match message if no users found', async () => {
  const mockSetUsers = jest.fn();
  const mockSetButtonTrigger = jest.fn();
  const mockUsers: User[] = [];

  render(
    <Router>
      <UserSearchbar setUsers={mockSetUsers} users={mockUsers} setButtonTrigger={mockSetButtonTrigger} />
    </Router>
  );

  const inputElement = screen.getByPlaceholderText(/Enter a username/i) as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'nonexistentuser' } });

  const buttonElement = screen.getByText(/Search/i);
  fireEvent.click(buttonElement);

  const errorMessage = await screen.findByText(/No user match/i);
  expect(errorMessage).toBeInTheDocument();
});