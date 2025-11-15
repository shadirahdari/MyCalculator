export function factorial(n) {
  if (n < 0 || Math.floor(n) !== n) return NaN
  const limit = Math.min(170, n)
  let res = 1
  for (let i = 2; i <= limit; i++) res *= i
  return res
}

export function applyUnaryOperation(value, fn, angleUnit = 'rad') {
  const v = Number(value)
  if (Number.isNaN(v)) return NaN

  switch (fn) {
    case 'sin':
      return angleUnit === 'deg' ? Math.sin((v * Math.PI) / 180) : Math.sin(v)
    case 'cos':
      return angleUnit === 'deg' ? Math.cos((v * Math.PI) / 180) : Math.cos(v)
    case 'tan':
      return angleUnit === 'deg' ? Math.tan((v * Math.PI) / 180) : Math.tan(v)
    case 'ln':
      return Math.log(v)
    case 'log':
      return Math.log10 ? Math.log10(v) : Math.log(v) / Math.LN10
    case 'sqrt':
      return Math.sqrt(v)
    case 'square':
      return v * v
    case 'reciprocal':
      return v === 0 ? NaN : 1 / v
    case 'fact':
      return factorial(v)
    default:
      return v
  }
}

export default applyUnaryOperation
