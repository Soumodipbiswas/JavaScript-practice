let newBtn = document.createElement("button");
newBtn.innerText = "Click Here";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
//div.prepend(newBtn);
//div.before(newBtn);
//div.after(newBtn);

let newhead = document.createElement("h1");
newhead.innerHTML = "<i>This Heading is added with JS!</i>";
document.querySelector("body").prepend(newhead);

let para = document.querySelector("p");
