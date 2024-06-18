import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { it, expect, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { UserSearchbar } from '../../../../src/Pages/Landing/components/UserSearchbar'
import { mockUsers } from '../../../../mocks/mockUsers'

// Mock functions
const mockSetUsers = vi.fn();
const mockSetButtonTrigger = vi.fn();

describe('UserSearchbar', () => {
  it('should render the UserSearchbar component', () => {
    render(
        <BrowserRouter>
          <UserSearchbar 
            setUsers={mockSetUsers} 
            users={mockUsers} 
            setButtonTrigger={mockSetButtonTrigger} 
          />
        </BrowserRouter>
      );

    screen.debug();
  });
});