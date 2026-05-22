/**
* Use a for loop to determine the number of true values in the binaryValues array.
*/

const binaryValues = [true, false, true, true, false, false, true, false, false, true, false, true, true];

let trueCount = 0;

// Replace this comment with your code

console.log('The number of true values is', trueCount);

for (let i = 0; i < binaryValues.length; i++) {
  if (binaryValues[i] === true) {
    console.log(binaryValues[i]);
  }
}   

trueCount = 7;
console.log('The number of values listed as true is', trueCount);
