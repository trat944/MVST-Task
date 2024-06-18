import React from 'react';
import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { LandingPage } from '../../../src/Pages/Landing';
import { BrowserRouter } from 'react-router-dom';

const mockFetchAndSetUsers = vi.fn();
vi.mock('../../../../src/utils/fetchAndSetUsers', () => ({
  fetchAndSetUsers: mockFetchAndSetUsers,
}));

describe('LandingPage', () => {
  it('should render the LandingPage component', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    screen.debug();

    //Simulate that loading is finished
    mockFetchAndSetUsers.mockImplementation((setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
      setLoading(false);
    });

    // Re-render the page after loading is complete
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    screen.debug();
  });
});
