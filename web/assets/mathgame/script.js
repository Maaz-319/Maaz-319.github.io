var firstOperand = 0;
var secondOperand = 0;
var operator = '';
var answer = 0;
var score = 0;


function getNewQuestion() {
    operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    if (operator == '*') {
        firstOperand = Math.floor(Math.random() * 10);
        secondOperand = Math.floor(Math.random() * 10);
    } else {
        firstOperand = Math.floor(Math.random() * 1000);
        secondOperand = Math.floor(Math.random() * 1000);
    }
    if (operator == '-' && firstOperand < secondOperand) {
        var temp = firstOperand;
        firstOperand = secondOperand;
        secondOperand = temp;
    }
    switch (operator) {
        case '+':
            answer = firstOperand + secondOperand;
            break;
        case '-':
            answer = firstOperand - secondOperand;
            break;
        case '*':
            answer = firstOperand * secondOperand;
            break;
    }

    $('.question__text').text(firstOperand + ' ' + operator + ' ' + secondOperand + ' = ?');
}


function checkAnswer() {
    if (parseInt($('#answer').val()) == answer) {
        $('#answer').val('');
        getNewQuestion();
        score++;
        $('.game__result-text').text('Correct!');
        $('.game__score').text(`Score: ${score}`);
    }
    else {
        $('.game__result-text').text('Wrong!');
        $('.game__score').text(`Score: ${score}`);
    }
}

$('#answer').on('keypress', function (event) {
    if (event.which === 13) {
        checkAnswer();
    }
});

$(document).ready(function () {
    $('#answer').focus();
    $('')
    getNewQuestion();
});