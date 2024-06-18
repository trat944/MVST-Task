import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { ProfileInfoContainer } from '../../../../../src/Pages/UserRepositories/components/ProfileInfoContainer';
import { mockUserSpecificItem } from '../../../../../mocks/mockUserSpecific';

// Mock the useUserSpecific hook
const mockUseUserSpecific = vi.fn();
vi.mock('../../../../src/hooks/useUserSpecific', () => ({
  useUserSpecific: mockUseUserSpecific,
}));

describe('ProfileInfoContainer', () => {
  it('should render Skeleton when loading', () => {
    mockUseUserSpecific.mockReturnValue({ user: null, loading: true });

    render(
      <BrowserRouter>
        <ProfileInfoContainer name="johndoe" />
      </BrowserRouter>
    );

    screen.debug();
  });

  it('should render UserSpecificItem when loading is complete', () => {

    mockUseUserSpecific.mockReturnValue({ user: mockUserSpecificItem, loading: false });

    render(
      <BrowserRouter>
        <ProfileInfoContainer name="johndoe" />
      </BrowserRouter>
    );

    screen.debug();
  });
});
