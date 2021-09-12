
const grid = document.querySelector('.grid')
const hardFactor = 0.7
function createGrid() {
    // create 9 div
    for (let i = 1; i <= 9; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'square')
        div.setAttribute('id', `${i}`)
        grid.appendChild(div)
    }
}

createGrid()

function start() {
    const square = document.querySelectorAll('.square')
    // const mole = document.querySelectorAll('.mole')
    const timeLeft = document.querySelector('#timeLeft')
    let pause = false
    // pauseGame()
    let score = document.querySelector('#result')
    let hitCell


    timeLeft.textContent = 60
    let result = 0
    let currentTime = timeLeft.textContent

    function randomSquare() {

        // remove all mole class
        square.forEach(className => {
            className.classList.remove('mole')
        })
        // select a random cell and add the mole class
        let randomPosition = square[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')
        // assign a hit class
        hitCell = randomPosition.id
    }

    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if ((id.id === hitCell) && (pause === false)) {
                result += 1
                score.textContent = result
            }
        })
    })
    let timeout = 1000
    let timerId = setInterval(countDown, 1000)
    let timerMole = setInterval(randomSquare, timeout)
    // function moveMole() {
    //     let timerId = null
        // timerMole = setInterval(randomSquare, timeout)
    //
    // }
    function countDown() {
        if (pause === false) {
            currentTime--
            timeLeft.textContent = currentTime
            makeItHarder(currentTime)
        }
        if (currentTime === 0) {
            clearInterval(timerMole)
            clearInterval(timerId)
            const winningTextElement = document.querySelector('[data-winning-message-text]')
            const winningMessageElement = document.getElementById('winningMessage')
            winningTextElement.innerText = `Hitted ${result} times to the mole,\n CONGRATULATIONS,\n you made it!!`
            winningMessageElement.classList.add('show')
            document.querySelector('#startButton').onclick = restart
            submitScore(result)
        }
    }
    function resetInterval() {
        clearInterval(timerMole)
        timerMole = setInterval(randomSquare, timeout)
    }
    // pause feature
    const pauseButton = document.querySelector('#Pause')
    pauseButton.onclick = pauseGame
    document.addEventListener('keydown', function (e) {
        if ((e.key === 'p') || (e.code === 'Space')) {
            pauseGame()
        }
    })
    function pauseGame() {
        // pause the score and change the layout of the button
        if (!pause) {
            pause = true
            clearInterval(timerMole)
            pauseButton.innerHTML = 'Resume'
        } else {
            pause = false
            timerMole = setInterval(randomSquare, timeout)
            pauseButton.innerHTML = 'Pause'
        }
    }
    function makeItHarder (time) {
        if (time === 50) {
            timeout *= hardFactor
            resetInterval()
        } else if (time === 40) {
            timeout *= hardFactor
            resetInterval()
        } else if (time === 30) {
            timeout *= hardFactor
        } else if (time === 20) {
            timeout *= hardFactor
            resetInterval()
        } else if (time === 10) {
            timeout *= hardFactor
            resetInterval()
        }
    }
    pauseGame()
}
start()
function restart() {
    window.location.reload()
}
document.querySelector('#restartButton').onclick = restart
function submitScore(result) {
    const name = prompt(`You scored ${result}, whats your name?`)
    if ((name !== '') && (name != null)) {
        // const url = 'https://miguepro.herokuapp.com/scores/swam'
        const url = 'http://127.0.0.1:8000/scores/swam'
        const data = { name: name, score: result }
        console.log(`name: ${name}: score: ${result}`)
        fetch(url, {
            headers: {
              // 'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)}).then(response => {
                console.log(response)
        })
} else {
        console.log('Not entered any name')
    }
}
function highscores() {
    // add the functionality to dissapear with a wandom click, and erase the button
    const url = 'https://miguepro.herokuapp.com/scores/wam'
    const highScoresTextElement = document.querySelector('[data-high-scores-text]')
    const highScoresMessageElement = document.getElementById('highScores')
    highScoresMessageElement.onclick = () => {
        highScoresMessageElement.classList.add('hide')
    }
    const div = document.createElement('div')
    // const url = 'http://127.0.0.1:8000/scores/wam'
    // const closeButton = document.querySelector('#closeHighScores')
    // closeButton.addEventListener('click', () => {
    //     highScoresMessageElement.classList.add('hide')
    fetch(url, {
        // headers: {
        //     'Content-Type' : 'application/json'
        // },
        method: "GET"

    }).then(response => response.json())
        .then(data => {
            // select div in highscores
            div.classList.add('hsTable')
            div.innerHTML = '<h1>TOP 5 High Scores</h1>'
            for (let i = 0; i < 5; i++) {
                console.log(data[i])
                let divText = document.createElement('p')
                divText.innerHTML = `<h3>NAME: ${data[i].name}</h3> <h4>SCORE: ${data[i].score}</h4>`
                div.appendChild(divText)
                highScoresTextElement.appendChild(div)
            }
            highScoresMessageElement.classList.remove('hide')
            highScoresMessageElement.classList.add('show')
            })
}
highscores()
function showHighScores() {
    const highScoresMessageElement = document.getElementById('highScores')
    highScoresMessageElement.classList.remove('hide')
    highScoresMessageElement.classList.add('show')
}
