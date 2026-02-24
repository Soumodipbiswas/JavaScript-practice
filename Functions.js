function sum(a, b) {
    let c = 0;
    c = a+b;
    return c;
}
let result = sum(123, 765);
console.log(result);

// Arrow Functions ( Used for small Functions )
const arrowSum = (a, b) => {
    console.log(a + b);
}
console.log(arrowSum);
arrowSum(123, 765);

// how to implement Foreach loop, It is called Higher Order Function/Method
let arr = [1, 2, 3, 4, 5]
arr.forEach((val) => {
    console.log(val);
});

let arr1 = ["pune", "delhi", "mumbai", "kolkata"];
arr1.forEach((val, idx, arr1) => {
    console.log(val.toUpperCase(), idx, arr1);
})

// Map function
let num = [23, 12, 67];
let newNum = num.map((val) => {
    return val*val;
});
console.log(newNum);

// Filter function
let nums = [1, 2, 3, 4, 5, 68, 89, 24, 100];
let evenNums = nums.filter((val) => {
    return val % 2 === 0;
});
console.log(evenNums);

// Reduce function
let arr2 = [2, 23, 76, 39, 22, 108];
const output = arr2.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);