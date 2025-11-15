import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CalcButton from '../CalcButton'

describe('CalcButton', () => {
  it('renders label and calls onClick', () => {
    const handleClick = vi.fn()
    render(<CalcButton onClick={handleClick}>7</CalcButton>)

    const btn = screen.getByRole('button', { name: /7/ })
    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
