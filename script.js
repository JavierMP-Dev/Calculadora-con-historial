document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const player = document.getElementById('player');
    let gameInterval;
    let gameOver = false;

    function startGame() {
        gameInterval = setInterval(createFallingObject, 1000);
    }

    function createFallingObject() {
        if (!gameOver) {
            const fallingObject = document.createElement('div');
            fallingObject.classList.add('falling-object');
            gameContainer.appendChild(fallingObject);
            fallingObject.addEventListener('animationend', () => {
                gameContainer.removeChild(fallingObject);
            });
            checkCollision(fallingObject);
        }
    }

    function checkCollision(fallingObject) {
        const playerRect = player.getBoundingClientRect();
        const objectRect = fallingObject.getBoundingClientRect();
        if (
            objectRect.bottom >= playerRect.top &&
            objectRect.top <= playerRect.bottom &&
            objectRect.right >= playerRect.left &&
            objectRect.left <= playerRect.right
        ) {
            gameOver = true;
            clearInterval(gameInterval);
            alert('Game Over');
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            movePlayer(-50);
        } else if (event.key === 'ArrowRight') {
            movePlayer(50);
        }
    });

    function movePlayer(distance) {
        const playerPosition = player.style.left ? parseInt(player.style.left) : 0;
        const newPosition = playerPosition + distance;
        if (newPosition >= 0 && newPosition <= (gameContainer.offsetWidth - player.offsetWidth)) {
            player.style.left = `${newPosition}px`;
        }
    }

    startGame();
});
