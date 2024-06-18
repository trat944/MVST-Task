import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { it, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { RepoHeader } from '../../../../../../src/Pages/UserRepositories/components/RepositoryContainer/RepoHeader';
import { mockRepos } from '../../../../../../mocks/mockRepos';

describe('RepoHeader', () => {
  it('should render the RepoHeader component', () => {
    render(
      <BrowserRouter>
        <RepoHeader repos={mockRepos} />
      </BrowserRouter>
    );

    screen.debug();
  });
});
