let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Narula Institute of Technology."; // concatinate
console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[2]);
console.log(divs[1]);
let idx = 1;
for (const div of divs) {
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}
//divs[0].innerText = "New Unique Value 1";
