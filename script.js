const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('checkBtn').addEventListener('click', () => {
    const guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        document.getElementById('checkBtn').disabled = true;
    } else if (guess < targetNumber) {
        document.getElementById('message').textContent = 'Try a higher number.';
    } else {
        document.getElementById('message').textContent = 'Try a lower number.';
    }
});
