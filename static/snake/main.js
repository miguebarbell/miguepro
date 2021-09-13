// TODO: add a pause method
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
const intensity = 0.9
let pause = true
let finishGame = false
let firstInterval = 1000
let score = document.querySelector('#result')
// put a class for the borders
const squares = grid.childNodes
let interval
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
    while (squares[appleIndex].classList.contains('border') ||
    (squares[appleIndex].classList.contains('snake'))) {nextApple()}
    squares[appleIndex].classList.add('apple')

}
// appear the first random apple
nextApple()
function moveSnake() {
    // add snake to the direction
    collisionCheck()
    // check if snake ate an apple
    if (squares[snake[0]+direction].classList.contains('apple')) {
        squares[snake[0]+direction].classList.add('snake')
        squares[snake[0]+direction].classList.remove('apple')
        nextApple()
        score.textContent = snake.length
        // refresh the scoreboard
        // make ir harder
        clearInterval(interval)
        firstInterval *= intensity
        interval = setInterval(moveSnake, firstInterval)
    } else {
        // snake just moving, cut the tail!
        let tail = snake.pop()
        squares[tail].classList.remove('snake')
    }
    snake.unshift(snake[0]+direction)
    snake.forEach(i => squares[i].classList.add('snake'));
    // collisionCheck()
    snakeIndex = snake[0]
    if (finishGame) {endGame()}
    // console.log(snake)
}

// let interval = setInterval(moveSnake, firstInterval)
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
    if (pause === false) {
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
}}
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
    // submit the results
    submitScore('snake', snake.length - 3)
}
function restart() {
    window.location.reload()
}

// // HighScore related auxiliary functions
// const highScoresMessageElement = document.getElementById('highScores')
// const highScoresTextElement = document.querySelector('[data-high-scores-text]')
// document.querySelector('#restartButton').onclick = restart
// function showHighScores() {
//     highScoresMessageElement.classList.remove('hide')
//     highScoresMessageElement.classList.add('show')
// }
// function highScores() {
// //     // const url = 'http://127.0.0.1:8000/scores/wam'
//     const url = 'https://miguepro.herokuapp.com/scores/wam'
// //     // with one click on the screen the highscores will dissappear
//     highScoresMessageElement.onclick = () => {
//         highScoresMessageElement.classList.add('hide')
//     }
// //     // create the div where the highscores will be and set a class for further styling
//     const div = document.createElement('div')
//     div.classList.add('hsTable')
//     fetch(url, {
//        method: 'GET'
//     }).then(response => response.json())
//         .then(data => {
//         div.innerHTML = '<h1>TOP 5 High Scores</h1>'
//         for (let i = 0; i < 5; i++) {
//             console.log(data[i])
//             let divText = document.createElement('p')
//             divText.innerHTML = `<h3>NAME: ${data[i].name}</h3> <h4>SCORE: ${data[i].score}</h4>`
//             div.appendChild(divText)
//             highScoresTextElement.appendChild(div)
//         }
//         highScoresMessageElement.classList.remove('hide')
//         highScoresMessageElement.classList.add('show')
//         })
// }
// function submitScore(result) {
//     const name = prompt(`You scored ${result}, whats your name?`)
//     if ((name !== '') && (name != null)) {
//         const url = 'https://miguepro.herokuapp.com/scores/swam'
//         // const url = 'http://127.0.0.1:8000/scores/swam'
//         const data = { name: name, score: result }
//         console.log(`name: ${name}: score: ${result}`)
//         fetch(url, {
//             headers: {
//                 // 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             method: "POST",
//             body: JSON.stringify(data)}).then(response => {
//             console.log(response)
//         })
//     } else {
//         console.log('Not entered any name')
//     }
// }
highScores('snake')
function pauseGame() {
    let button = document.querySelector('#Pause')
    if (pause === false) {
        pause = true
        clearInterval(interval)
        button.innerText = 'Resume'
    } else {
        pause = false
        interval = setInterval(moveSnake, firstInterval)
        button.innerText = 'Pause'
    }
}