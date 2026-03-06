let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("Congratulations! You win!");
        msg.innerText = `Congratulations! You win! Your ${userchoice} beats Computer's ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Oops! You lose! Computer wins!");
        msg.innerText = `Oops! You lose! Computer wins! Your ${userchoice} loses to Computer's ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice= () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const playGame = (userchoice) => {
    console.log("User choice : ", userchoice);
    const compchoice = genCompChoice();
    console.log("Computer choice : ", compchoice);
    if (userchoice === compchoice) {
        console.log("It's a tie! Play again!");
        msg.innerText = "It's a tie! Play again!";
        msg.style.backgroundColor = "grey";
    } else {
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});