let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

//  UI elements
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

// Assign UI
minNum.textContent = min;
maxNum.textContent = max;

// Play again eventlistener
game.addEventListener("mousedown", function(e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
})

// Create eventlistener
guessBtn.addEventListener("click", function() {
        let guess = parseInt(guessInput.value);
        // Validation
        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(` Please Enter a number between ${min} and ${max}`, 'red');
        }
        if (guess === winningNum) {
            gameOver(true, `${winningNum} is correct and YOU WIN`)

        } else {
            // Wrong number
            guessLeft -= 1;
            if (guessLeft === 0) {
                // Game over and lost
                gameOver(false, ` Game Over, You Lost, The correct number was ${ winningNum }`)
                    // Disable Input
                guessInput.disabled = true;
                // Changing border to show they won
                guessInput.style.borderColor = "red"

            } else {
                // Wrong number
                guessInput.style.borderColor = "red"
                    // Clear input
                guessInput.value = " "
                setMessage(`Guess is not correct, ${ guessLeft } guesses left `)
            }
        }
    })
    // Game over Function
function gameOver(won, msg) {
    let color;
    color === true ? color = "red" : color = "green"
        // Disable Input
    guessInput.disabled = true;
    // Changing border to show they won
    guessInput.style.borderColor = color;
    // TextColor
    message.style.color = color;
    // Set message
    setMessage(msg);

    // Play again
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
}

// Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
