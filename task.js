const timerElement = document.getElementById('timer');
let timeRemaining = parseInt(timerElement.textContent);

const countdown = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = timeRemaining;

    if (timeRemaining <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    }
}, 1000);
