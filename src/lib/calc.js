export function calculate(firstValue, secondValue, operation) {
  switch (operation) {
    case '+':
      return firstValue + secondValue
    case '-':
      return firstValue - secondValue
    case '*':
      return firstValue * secondValue
    case '/':
      return firstValue / secondValue
    case '=':
      return secondValue
    default:
      return secondValue
  }
}

export default calculate
