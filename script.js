const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const UserTotal = document.getElementById('usersco');
const ComTotal = document.getElementById('comsco');

let userScore = 0;
let computerScore = 0;

function computerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function findwinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return 'You win!';
    }
    computerScore++;
    return 'Computer wins!';
}

function updateResult(userChoice, computerChoice) {
    const result = findwinner(userChoice, computerChoice);
    resultDisplay.textContent = `Computer chose ${computerChoice}. ${result}`;
    UserTotal.textContent = `User Score: ${userScore}`;
    ComTotal.textContent = `Computer Score: ${computerScore}`;

}

rockButton.addEventListener('click', () => {
    const userChoice = 'rock';
    const computerChoice = computerchoice();
    updateResult(userChoice, computerChoice);
});

paperButton.addEventListener('click', () => {
    const userChoice = 'paper';
    const computerChoice = computerchoice();
    updateResult(userChoice, computerChoice);
});

scissorsButton.addEventListener('click', () => {
    const userChoice = 'scissors';
    const computerChoice = computerchoice();
    updateResult(userChoice, computerChoice);
});
