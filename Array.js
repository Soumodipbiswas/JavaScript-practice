let arr = [45, 87, 23, 73, 15, 29];
let sum = 0;
let avg = 0;
for (let val of arr) {
    console.log(val);
    sum = sum + val;
}
avg = sum / arr.length;
console.log(`Average of the numbers are = ${avg}`);

let price = [250, 645, 300, 900, 50];
let offer = 0;
for (let i = 0; i < price.length; i++) {
    offer = price[i] / 10;
    price[i] -= offer;
}
for (const val of price) {
    console.log(val);
}