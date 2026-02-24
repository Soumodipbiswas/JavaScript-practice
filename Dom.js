console.log(document);
console.dir(document);
let heading = document.getElementById("heading"); //h1
console.log(heading);
console.dir(heading);
let headings = document.getElementsByClassName("demoClass");// This is HTML collection
console.log(headings);
console.dir(headings);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

let firstElement = document.querySelector("p"); //returns 1st element
console.dir(firstElement);

let allElement = document.querySelectorAll("p"); // returns Nodelist
console.dir(allElement);

console.dir(document.body.firstChild);

let div = document.querySelector("div");
console.dir(div);

let head = document.querySelector("h5");

let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class", "newPara");
console.log(para.getAttribute("class"));