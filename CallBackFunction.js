// Write a custom higher-order function called forEachCustom() that behaves like forEach().
//  It should take an array and a callback function and apply the callback to each element of the array.

function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

let numbers = [1, 2, 3, 4, 5];

forEachCustom(numbers, (num, index) => {
  console.log(num);
});
