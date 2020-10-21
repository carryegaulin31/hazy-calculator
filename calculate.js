function calculate(arr) {           // calcaulate my array

  for (let i = 0; i < arr.length; i++) {   //go through the index of my array one at a time
    if (arr[i].value == 1) {     // if my array is equal to a numer of some sort (interger, string, word )
      return math.abs(arr) && operand // then return that number as its absolute value and the operand
    }
  }
}

const operand = (`+`, `-`, `*`, `/`) // identify these as the only operands allowable

function getAnswer(calculate, operand) { // to actually do the math pass the array at its absolute value and operand
  if (operand === "+") {
    return arr[i] + arr[i].length
  } else if (operand === "-") {
    return arr[i] - arr[i].length
  } else if (operand === "*") {
    return arr[i] * arr[i].length
  } else if (operand === "/") {
    return arr[i] / arr[i].length
  }
}


console.log(function calculate([])






module.exports = calculate()

// The `calculate` function runs an arithmetic calculation based upon an array of inputs (eg. `[2, '*', 10]`)
// Each input should be either a number or an operand (`+`, `-`, `*`, `/`)
// Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:
// * Stringified numbers (eg. `'2'`) should be treated as numbers
// * `NULL` should be treated as zero
// * `undefined` values should be ignored
// * Empty string values (eg. `''`) should be ignored
// * Non-numeric values (eg. `'foo'`) should be ignored


/* function calculate() {
  var x = Number(document.getElementById("number1").value);
  var y = Number(document.getElementById("number2").value);

  var operator = document.getElementById("operation").value;
  var answer = document.getElementById("answer")
  answer.value = getAnswer(operator, x, y)
  //instead of previous 2 lines could do this document.getElementById("answer").value = getAnswer(operator, x, y)
}

function getAnswer(operator, x, y) {
  if (operator === "+") {
    return x + y
  } else if (operator === "-") {
    return x - y
  } else if (operator === "*") {
    return x * y
  } else if (operator === "/") {
    return x / y */
