import React from 'react'
import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Header } from '../../src/components/shared/Header'

describe('Header', () => {
    it('should render Header', () => {
        render(<Header />);

        screen.debug()
    })
})