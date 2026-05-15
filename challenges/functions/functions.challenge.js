/*
* Complete the following:
* 
* 1. Create a function named "square" that takes one number parameter
     - the function must then return the mathmatical square of that parameter
*    - show this function works by calling three times (with three different inputs) and logging the results
* 2. Create a function that takes in an array of booleans as a parameter
*    - the function must log the count of how many true values are in the array and also how many false values there are
*    - then it must return the length of the array
*    - show this function works by calling it with an array of booleans and then logging the result (which is the length of the array)
*/

// Begin writing your code below

function square(num) {
    return num * num;
}

console.log(square(7));
console.log(square(3));
console.log(square(64));

function countBooleans(booleanArray) {
  let trueNumCount = 0;
  let falseNumCount = 0;

  for (const value of booleanArray) {
    if (value === true) {
      trueNumCount++;
    } else {
      falseNumCount++;
    }
  }

  console.log('true count:', trueNumCount);
  console.log('false count:', falseNumCount);

  return booleanArray.length;
}

const result = countBooleans([true, false, true, false, true]);
console.log('array length:', result);