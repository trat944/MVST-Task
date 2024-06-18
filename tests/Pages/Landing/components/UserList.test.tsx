import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import {UserList} from '../../../../src/Pages/Landing/components/UserList'
import { mockUsers } from '../../../../mocks/mockUsers'

describe('UserItem', () => {
    it('should render the UserItem component with user details', () => {
        render(
            <BrowserRouter>
              <UserList users={mockUsers} triggerUserDetails={false} />
            </BrowserRouter>
          );
      
          screen.debug();
    });
});