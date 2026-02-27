let modeBtn = document.querySelector("#mode");
let currMode = "Light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", ()=>{
    console.log("You are trying to change mode.");
    if (currMode === "Light") {
        currMode = "Dark";
        //document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "Light";
        //document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});

let div1 = document.querySelector("#div1");
let hover = 1;
 div1.addEventListener("mouseover", ()=>{
    if (hover === 1) {
        hover = 2;
        document.querySelector("#div1").style.backgroundColor = "pink";
    } else {
        hover = 1;
        document.querySelector("#div1").style.backgroundColor = "aqua";
    }
    console.log(hover);
 });