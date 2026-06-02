let scores = {"user":0, "computer": 0};
let dominance = {rock:{paper: 1, scissor: 0},
    paper:{scissor:1, rock:0},
    scissor:{rock:1, paper:0}
}

function getComputerInput () {
    return ['rock','paper','scissor'][Math.floor(Math.random()*3)];
}

function computeRoundOutput(userInput, computerInput) {
    if (userInput == computerInput){
        return "tie";
    }
    else if (dominance[userInput][computerInput]){
        return "user";
    }
    return "computer";
}


let userScore = document.querySelector(".user p");
let computerScore = document.querySelector(".computer p");
let results = document.querySelector(".results");
let buttons = document.querySelectorAll(".choice-buttons button")
function computeRound(e){
    let userInput = e.target.id;
    let computerInput = getComputerInput();
    let result = computeRoundOutput(userInput, computerInput);
    if (result == "tie"){
        results.textContent = "A tie";
    }
    else {
        results.textContent = result + " made a point";
    }
    scores[result] += 1;
    userScore.textContent = scores.user;
    computerScore.textContent = scores.computer;
}

buttons.forEach((button) => {
    button.addEventListener("click",computeRound);
});