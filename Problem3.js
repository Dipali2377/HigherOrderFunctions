function fn(acc, currentVal) {
    acc+=currentVal;
    return acc;  
}

let input = [5,10,15,20];

let result = input.reduce(fn, 0);

console.log(result);
