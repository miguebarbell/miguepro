const grid = document.getElementById('grid');
for (let i = 0; i < 8000; i++) {
    let div = document.createElement('div');
    div.classList.add('square')
    grid.appendChild(div);
}
// position variables
const width = 100
let appleIndex = 0;
let snakeIndex = 4020;
let snake = [4020,4019,4018]
let direction = 1
const intensity = 0.5
let finishGame = false
const firstInterval = 1000
let score = document.querySelector('#result')
// put a class for the borders
const squares = grid.childNodes
let e
// console.log(squares.length)

for (let i=1; i<= 100; i++) {
    squares[i].classList.add('top')
    squares[i].classList.add('border')
}
for (let i=100; i<= 8000; i += 100) {
    squares[i].classList.add('right')
    squares[i].classList.add('border')
}
for (let i=1; i<= 8000; i += 100) {
    squares[i].classList.add('left')
    squares[i].classList.add('border')
}
for (let i=7901; i<=8000; i++) {
    squares[i].classList.add('bottom')
    squares[i].classList.add('border')
}
function nextApple() {
    // appear a random apple

    appleIndex = Math.floor(Math.random() * (squares.length-1))
    while (squares[appleIndex].classList.contains('border')) {nextApple()}
    squares[appleIndex].classList.add('apple')

}
// appear the first random apple
nextApple()
function moveSnake() {
    // add snake to the direction
    collisionCheck()
    if (squares[snake[0]+direction].classList.contains('apple')) {
        squares[snake[0]+direction].classList.add('snake')
        squares[snake[0]+direction].classList.remove('apple')
        nextApple()
        score.textContent = snake.length
        // refresh the scoreboard
        // make ir harder
        clearInterval(interval)
        interval = setInterval(moveSnake, firstInterval*intensity)
    } else {
        let tail = snake.pop()
        squares[tail].classList.remove('snake')
    }
    snake.unshift(snake[0]+direction)
    snake.forEach(i => squares[i].classList.add('snake'));
    // collisionCheck()
    snakeIndex = snake[0]
    if (finishGame) {endGame()}
    console.log(snake)

    // erase the tail
}

let interval = setInterval(moveSnake, firstInterval)
function collisionCheck() {
    // this should checked after every snake move
    if ((squares[snakeIndex+direction].classList.contains('right') && direction === 1) ||
    (squares[snakeIndex+direction].classList.contains('bottom') && direction === 100) ||
    (squares[snakeIndex+direction].classList.contains('left') && direction === -1) ||
    (squares[snakeIndex+direction].classList.contains('top') && direction === -100) ||
    (squares[snakeIndex+direction].classList.contains('snake'))) {
        finishGame = true
    }

}
function leadSnake(e) {
    if (e.keyCode === 39) {
        // right
        direction = 1
        moveSnake()
    } else if (e.keyCode === 40) {
        // down
        direction = width
        moveSnake()
    } else if (e.keyCode === 37) {
        // left
        direction = -1
        moveSnake()
    } else if (e.keyCode === 38) {
        // up
        direction = -width
        moveSnake()
    }
}
document.addEventListener('keydown', leadSnake)
function endGame() {
    // finish the game
    // stop listening keys
    clearInterval(interval)
    document.removeEventListener('keydown', leadSnake)
    // make the window appear

    const winningTextElement = document.querySelector('[data-winning-message-text]')
    const winningMessageElement = document.getElementById('winningMessage')
    winningTextElement.innerText = `Ate ${snake.length - 3} apples,\n CONGRATULATIONS,\n you made it!!`
    winningMessageElement.classList.add('show')
    document.querySelector('#startButton').onclick = restart
}
function restart() {
    window.location.reload()
}
document.querySelector('#restartButton').onclick = restart
