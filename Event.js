let btn1 = document.querySelector('#btn1');
let a = 0;
btn1.onclick = () => {
    console.log("btn1 was clicked!");
    a++;
    console.log(a);
}
let div1 = document.querySelector("#div1");
 div1.addEventListener("mouseover", (evt)=>{
    console.log("You are inside div 1.");
    console.log(evt.type);
 });
 div1.addEventListener("mouseover", (evt)=>{
    console.log("You are inside div 2.");
    console.log(evt.type);
 });
 const handler3 = (evt)=>{
    console.log("You are inside div 3.");
    console.log(evt.type);
 };
 div1.addEventListener("mouseover", handler3);
 div1.addEventListener("mouseover", (evt)=>{
    console.log("You are inside div 4.");
    console.log(evt.type);
 });

 div1.removeEventListener("mouseover", handler3);