import { describe, it, expect } from 'vitest'
import { applyUnaryOperation, factorial } from '../unary'

describe('unary operations', () => {
  it('factorial calculates correctly', () => {
    expect(factorial(5)).toBe(120)
    expect(factorial(0)).toBe(1)
    expect(Number.isNaN(factorial(-1))).toBe(true)
  })

  it('sqrt, square, reciprocal work', () => {
    expect(applyUnaryOperation(9, 'sqrt')).toBe(3)
    expect(applyUnaryOperation(4, 'square')).toBe(16)
    expect(applyUnaryOperation(2, 'reciprocal')).toBe(0.5)
  })

  it('trigonometry respects angle unit', () => {
    const rad = applyUnaryOperation(Math.PI / 2, 'sin', 'rad')
    expect(Math.abs(rad - 1)).toBeLessThan(1e-12)
    const deg = applyUnaryOperation(90, 'sin', 'deg')
    expect(Math.abs(deg - 1)).toBeLessThan(1e-12)
  })
})
