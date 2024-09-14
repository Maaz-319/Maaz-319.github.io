let categoryList = [];
let questions = [];
let score = 0;
let currentQuestion = "";

$(document).ready(function () {
    // Fetch categories from the Open Trivia Database API
    fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            // Extract categories from the API response
            const categories = data.trivia_categories;

            // Create a list of categories and their respective numbers
            categoryList = categories.map(category => {
                return {
                    name: category.name,
                    id: category.id
                };
            });

            for (var i = 0; i < categoryList.length; i++) {
                $('#category').append('<option>' + categoryList[i].name + '</option>');
            }
        })
        .catch(error => console.error('Error fetching categories:', error));
});

function start_quiz() {
    // Get the selected category
    const selectedCategory = categoryList.find(category => category.name === $('#category').val());
    const difficulty = $('#difficulty').val();

    // Fetch questions from the Open Trivia Database API
    const url = `https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}&difficulty=${difficulty}&type=multiple`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extract questions from the API response
            questions = data.results;

            // Display the first question
            show_question();
        })
        .catch(error => console.error('Error fetching questions:', error));

    $('.container').css('display', 'none');
    $('.questions__container').css('display', 'block').css('visibility', 'visible');

    show_question();
}

function show_question() {
    while (questions.length > 0) {
        console.log("START")
        console.log(questions[0])
        currentQuestion = questions.pop();
        const answers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);

        $('#question').html(currentQuestion.question);
        $('#answers').empty();
        answers.forEach(answer => {
            $('#answers').append('<button class="answer ml-4 bg-green-500 text-slate-950 py-3 px-8 rounded-lg mt-2 hover:bg-green-600 active:bg-green-800" onclick="check_answer(this)">' + answer + '</button>');
        });

        break;
    }
}

function check_answer(button) {
    const answer = $(button).text();
    const correctAnswer = currentQuestion.correct_answer;

    if (answer === correctAnswer) {
        score++;
        $('#score').html(score);
    }
    if (questions.length === 0) {
        $('.container').css('display', 'none');
        $('.questions__container').css('display', 'none').css('visibility', 'collapse');
        $('.result__div').css('display', 'block').css('visibility', 'visible');
        $('#final_score').html(score);
    } else {
        show_question();
    }
}