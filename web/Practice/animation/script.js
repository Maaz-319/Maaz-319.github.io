document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".choice-button");
    const playerChoiceDisplay = document.getElementById("player-choice");
    const quantumThinkingDisplay = document.getElementById("quantum-thinking");
    const resultDisplay = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.id; // Player's choice
            playGame(playerChoice);
        });
    });

    function playGame(playerChoice) {
        // Reset displays
        playerChoiceDisplay.style.display = "block";
        quantumThinkingDisplay.style.display = "block";
        resultDisplay.style.display = "none";

        $('.result').html(`Your Choice: <span class="text-green-800 text-xl">${playerChoice}</span>`);
        quantumThinkingDisplay.textContent = "Quantum Computer is analyzing the coin toss...";

        // Simulate the coin toss
        setTimeout(() => {
            const tossResult = Math.random() < 0.5 ? "heads" : "tails"; // Random coin toss result

            // Quantum computer "predicts" the toss result correctly
            quantumThinkingDisplay.style.display = "none";
            resultDisplay.style.display = "block";

            if (tossResult === playerChoice) {
                $('#result').html(`Coin toss result: <span class="text-green-800 text-xl">${tossResult}</span>. Quantum Computer predicted it correctly`);
            } else {
                $('#result').html(`Coin toss result:  <span class="text-green-800 text-xl">${tossResult}</span>. Quantum Computer predicted it correctly`);
            }
        }, 2000);
    }
});
