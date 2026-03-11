let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const userMoveToken = document.querySelector("#user-move");
const compMoveToken = document.querySelector("#comp-move");

const playOutcomeFx = (outcome) => {
    const body = document.body;
    if (!body) return;

    body.classList.remove("state-win", "state-lose");
    void body.offsetWidth; // restart CSS animation

    if (outcome === "win") body.classList.add("state-win");
    if (outcome === "lose") body.classList.add("state-lose");

    window.clearTimeout(playOutcomeFx._t);
    playOutcomeFx._t = window.setTimeout(() => {
        body.classList.remove("state-win", "state-lose");
    }, 1200);
};

const moveImages = {
    rock: "./pictures/rock2.png",
    paper: "./pictures/paper2.png",
    scissors: "./pictures/67ebfd32e898b4ec3ae4e59ae33832c8.jpg",
};

const triggerMoveAnimation = () => {
    [userMoveToken, compMoveToken].forEach((el) => {
        if (!el) return;
        el.classList.remove("animate-move");
        // restart animation
        void el.offsetWidth;
        el.classList.add("animate-move");
    });
};

const updateMoveDisplay = (userchoice, compchoice) => {
    const userImg = moveImages[userchoice];
    const compImg = moveImages[compchoice];

    if (userMoveToken && userImg) {
        userMoveToken.style.backgroundImage = `url('${userImg}')`;
    }
    if (compMoveToken && compImg) {
        compMoveToken.style.backgroundImage = `url('${compImg}')`;
    }

    triggerMoveAnimation();
};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("Congratulations! You win!");
        msg.innerText = `Congratulations! You win! Your ${userchoice} beats Computer's ${compchoice}`;
        msg.style.backgroundColor = "green";
        playOutcomeFx("win");
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Oops! You lose! Computer wins!");
        msg.innerText = `Oops! You lose! Computer wins! Your ${userchoice} loses to Computer's ${compchoice}`;
        msg.style.backgroundColor = "red";
        playOutcomeFx("lose");
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
    updateMoveDisplay(userchoice, compchoice);
    if (userchoice === compchoice) {
        console.log("It's a tie! Play again!");
        msg.innerText = "It's a tie! Play again!";
        msg.style.backgroundColor = "grey";
        playOutcomeFx("tie");
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