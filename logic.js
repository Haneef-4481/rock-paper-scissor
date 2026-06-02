let scores = {"user":0, "computer": 0};
let dominance = {rock:{paper: 1, scissor: 0},
    paper:{scissor:1, rock:0},
    scissor:{rock:1, paper:0}
}

function getUserInput () {
    let input = prompt("Enter");
    return input;
}

function getComputerInput () {
    return ['rock','paper','scissor'][Math.floor(Math.random()*3)];
}

function computeRound (userInput, computerInput) {
    if (userInput == computerInput){
        return "tie";
    }
    else if (dominance[userInput][computerInput]){
        return "user";
    }
    return "computer";
}

function runGame () {
    for (let i = 0; i < 5; i++){
        let userInput = getUserInput();
        let computerInput = getComputerInput();
        let output = computeRound(userInput, computerInput);
        scores[output] += 1;
        if (output != "tie"){
            console.log(output + " made a point")
        }
        else {
            console.log("A tie");
        }
    }
    console.log("the scores are");
    console.log("user: " + scores['user']);
    console.log("computer: " + scores['computer']);
}

runGame();
