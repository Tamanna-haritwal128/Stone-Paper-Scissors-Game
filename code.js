let userscore = 0;
let compscore = 0;

const chocies = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userscorePara = document.getElementById("user-score");
const compscorePara = document.getElementById("comp-score");

const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    msg.textContent = "It's a Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";

};
const showWinner = (userWin,userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win! your ${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = gencompchoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "papper"?false:true;
    }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
    }else{
            userWin = compChoice === "rock"?false:true;
}
        showWinner(userWin,userChoice, compChoice);
    }
};

chocies.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
