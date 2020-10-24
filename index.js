function calculate(arr) {           // calcaulate my array
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[0] === 'string') {
      Number(arr[i]).push(newArr) {  // change it to a number is there a way to think of it as THEN?? IF THEN??
      } else {
        if (arr[i] = null) {
          let(arr[i] = 0) && arr[i].push(newArr)  //if it is null change it to zero and push to new array
        } else {
          if (typeof (arr[i] = (Number))) {
            return arr[i].push(newArr) // if it is actually a number then push to new array
          } else {
            if (arr[i].includes(operator)) {
              return arr[i].push(newArr)  // if it is an operator push it to new array position 1 cant do push!! what do I do?!?!
            } else {
              return NaN
            }
          }


          if (newArr.length = (3)) // how do I get this to actually DO THE MATH??
            let operand = ("+", "-", "*", "/");
          let num1 = newArr[0] // if newArr = 3 then 0 & 2 should be numbers and operator automatically in the middle at 1
          let num2 = newArr[2];
          function getAnswer(num1, num2, operand) {
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


            module.exports = calculate()

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
