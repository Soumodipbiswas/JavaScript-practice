let password = 2002;
let userNum = prompt("Enter your Password : ");
while (userNum != password) {
    userNum = prompt("You entered wrong Password. Enter again : ");
}
console.log("Congratulations, you entered right Password");