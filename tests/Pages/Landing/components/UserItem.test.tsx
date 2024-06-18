import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { UserItem } from '../../../../src/Pages/Landing/components/UserItem'
import { mockUser } from '../../../../mocks/mockUser'

describe('UserItem', () => {
    it('should render the UserItem component with user details', () => {
        render(
            <BrowserRouter>
              <UserItem user={mockUser} triggerUserDetails={false} />
            </BrowserRouter>
          );
      
          screen.debug();
    });
});
