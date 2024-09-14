var userScore = 0;
var computerScore = 0;
var options = ['rock', 'paper', 'scissors'];
var computerChoice = '';

function go(userChoice) {
    $('.square').show();
    // adding a delay
    setTimeout(function() {
        compare(userChoice);
    }, 1000);
    computerChoice = options[Math.floor(Math.random() * options.length)];
    $('.computer__choice').text(computerChoice);
    if (userChoice === computerChoice) {
        alert('It\'s a tie!');
        $('.square').hide();
    } else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
        userScore++;
        alert('You win! ' + userChoice + ' beats ' + computerChoice);
        $('.square').hide();
    } else {
        computerScore++;
        alert('You lose! ' + computerChoice + ' beats ' + userChoice);
        $('.square').hide();
    }
}