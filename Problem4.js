// Given an array of numbers,
// first filter out the odd numbers,
//  then square the remaining numbers,
//  and finally, calculate the sum of the squared numbers using filter(),
//  map(), and reduce().
//  Input: [1, 2, 3, 4, 5]
//  Expected Output: 20 Explanation: Filtered even numbers: [2, 4], squared: [4, 16], sum: 20

function fn(element) {
  if (element % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let input = [1, 2, 3, 4, 5];

let oddNumers = input.filter(fn);

console.log(oddNumers);

function fn1(element) {
  return element * element;
}

let squareNumbers = oddNumers.map(fn1);

console.log(squareNumbers);

function fn2(acc, currentVal) {
  acc += currentVal;
  return acc;
}

let sum = squareNumbers.reduce(fn2, 0);

console.log(sum);
