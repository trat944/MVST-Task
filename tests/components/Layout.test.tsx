import React from 'react'
import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import {Layout} from '../../src/components/Layout'
import '@testing-library/jest-dom/vitest'

describe('Layout', () => {
    it('should render Layout', () => {
        render(<Layout />);

        screen.debug()
    })
})