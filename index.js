function calculate(arr) {
  const newArr = []
  const operand = ['+', '-', '/', '*']

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' || typeof arr[i] === 'number' || arr[i] === null) {
      if (operand.includes(arr[i])) {
        newArr.push(arr[i])
      } else {
        if (arr[i] !== ('')) {
          let notStr = Number(arr[i])

          if (!isNaN(notStr)) newArr.push(notStr)
        }
      }
    }
  }

  if (newArr.length < 3) return NaN
  let num1 = newArr[0]
  let num2 = newArr[2]

  switch (newArr[1]) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      return 'NaN'
  }
}

module.exports = calculate
