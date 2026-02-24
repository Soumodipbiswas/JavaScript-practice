let num = prompt("Enter a number");
let result = num%5 === 0 ? "It is a multiple of 5" : "It is not a multiple of 5";
console.log(result);

let str = "JavaScript";
let size= 0;
for (let val of str) {
    console.log("val= ", val);
    size++;
}
console.log("String size= ", size);