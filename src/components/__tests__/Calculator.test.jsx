import React from 'react'
import { render, screen } from '@testing-library/react'
import Calculator from '../Calculator'

describe('Calculator', () => {
  it('renders main components', () => {
    render(<Calculator />)
    expect(screen.getByText(/Standard/i)).toBeInTheDocument()
    expect(screen.getByText(/History/i)).toBeInTheDocument()
    // assert zero and decimal buttons separately to avoid multiple-match error
    expect(screen.getByRole('button', { name: '0' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '.' })).toBeInTheDocument()
  })
})
