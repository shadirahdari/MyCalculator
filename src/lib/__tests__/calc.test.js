import { describe, it, expect } from 'vitest'
import { calculate } from '../calc'

describe('calculate', () => {
  it('adds correctly', () => expect(calculate(2,3,'+')).toBe(5))
  it('subtracts correctly', () => expect(calculate(5,2,'-')).toBe(3))
  it('multiplies correctly', () => expect(calculate(4,3,'*')).toBe(12))
  it('divides correctly', () => expect(calculate(10,2,'/')).toBe(5))
  it('equals returns second value', () => expect(calculate(7,9,'=')).toBe(9))
  it('unknown op returns second value', () => expect(calculate(1,8,'?')).toBe(8))
})
