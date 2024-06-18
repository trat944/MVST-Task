import React from 'react'
import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import {Skeleton} from '../../src/components/shared/Skeleton'

describe('Skeleton', () => {
    it('should render Skeleton', () => {
        render(<Skeleton />);

        screen.debug()
    })
})