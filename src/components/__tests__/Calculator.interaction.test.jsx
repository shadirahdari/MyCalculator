import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from '../Calculator'

describe('Calculator interactions', () => {
  it("performs 2 + 3 = 5", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole('button', { name: '2' }))
    await user.click(screen.getByRole('button', { name: '+' }))
    await user.click(screen.getByRole('button', { name: '3' }))
    await user.click(screen.getByRole('button', { name: '=' }))

    // display should show 5 (use async find in case of state update batching)
    expect(await screen.findByText('5')).toBeInTheDocument()
  })
})
