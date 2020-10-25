function calculate(arr) {
  const newArr = []
  const operand = ['+', '-', '/', '*']
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' || typeof arr[i] === 'number') {
    } else if (operand.includes(arr[i])) {
    } else if (arr[i] = null) return 0
      (Number(arr[i].push(newArr)))
  }
}

let num1 = newArr[0]
let num2 = newArr[2];
function getAnswer(newArr) {
  switch (newArr[1]) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 + num2;
    default:
      return "NaN"
  }
}

module.exports = calculate
// The `calculate` function runs an arithmetic calculation based upon an array of inputs (eg. `[2, '*', 10]`)
// Each input should be either a number or an operand (`+`, `-`, `*`, `/`)
// Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:
// * Stringified numbers (eg. `'2'`) should be treated as numbers
// * `NULL` should be treated as zero
// * `undefined` values should be ignored
// * Empty string values (eg. `''`) should be ignored
// * Non-numeric values (eg. `'foo'`) should be ignored*/

/*  for (let i = 0; i < arr.length; i++) {   // go through the index of my array one at a time to find numbers
    if (typeOf(arr[i] !== isNaN)) {            // pull the num 1 and num 2 out of array
      return (arr[i].push(newArr[0 || 2])      // if it is a number push it to new array position 0 or 2
    } else { */

      // Number(num1) && Number(num2) // something has to be done with this to make numbers
