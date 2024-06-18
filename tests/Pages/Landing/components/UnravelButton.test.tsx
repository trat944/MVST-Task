import React from 'react'
import { it, expect, describe, vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import {UnravelButton} from '../../../../src/Pages/Landing/components/UnravelButton'

describe('UnravelButton', () => {
    it('should render the UnravelButton component', () => {
        const mockSetTriggerUserDetails = vi.fn();
        render(<UnravelButton setTriggerUserDetails={mockSetTriggerUserDetails} />);
        
        screen.debug();
    });
  });