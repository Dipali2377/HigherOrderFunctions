function fn(element) {
  if (element % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let input = [1, 2, 3, 4, 5, 6];

let output = input.filter(fn);

console.log(output);
