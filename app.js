
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LIZARD = "lizard";
const SPOCK = "spock";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const lizardBtn = document.getElementById("lizard");
const spockBtn = document.getElementById("spock");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});
lizardBtn.addEventListener("click", () => {
    play(LIZARD);
});
spockBtn.addEventListener("click", () => {
    play(SPOCK);
});
function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "./Pictures/" + userOption + ".png";

    resultText.innerHTML = "Chossing!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "./Pictures/" + machineOption + ".png";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "./Pictures/" + machineOption + ".png";

        switch (result) {
            case TIE:
                resultText.innerHTML = "You have tied!";
                break;
            case WIN:
                resultText.innerHTML = "You win!";
                break;
            case LOST:
                resultText.innerHTML = "You lost!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 5);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
        case 3:
            return LIZARD;
        case 4:
            return SPOCK;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;
        if (machineOption === LIZARD) return WIN;
        if (machineOption === SPOCK) return LOST;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;
        if (machineOption === LIZARD) return LOST;
        if (machineOption === SPOCK) return WIN;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;
        if (machineOption === LIZARD) return WIN;
        if (machineOption === SPOCK) return LOST;

    } else if (userOption === LIZARD) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;
        if (machineOption === SCISSORS) return LOST;
        if (machineOption === SPOCK) return WIN;

    } else if (userOption === SPOCK) {

        if (machineOption === ROCK) return WIN;
        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;
        if (machineOption === LIZARD) return LOST;
    }




}



        
