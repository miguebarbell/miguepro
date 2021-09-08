
const grid = document.querySelector('.grid')
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
    const mole = document.querySelectorAll('.mole')
    const timeLeft = document.querySelector('#timeLeft')
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
            if (id.id === hitCell) {
                result += 1
                score.textContent = result
            }
        })
    })

    let timerId = setInterval(countDown, 1000)

    function moveMole() {
        let timerId = null
        timerId = setInterval(randomSquare, 1000)
    }

    function countDown() {
        currentTime--
        timeLeft.textContent = currentTime
        if (currentTime == 0) {
            const winningTextElement = document.querySelector('[data-winning-message-text]')
            const winningMessageElement = document.getElementById('winningMessage')
            winningTextElement.innerText = `Hitted ${result} times to the mole,\n CONGRATULATIONS,\n you made it!!`
            winningMessageElement.classList.add('show')
            document.querySelector('#startButton').onclick = restart
            // restart()
            // clearInterval(timerId)
            // alert('GAME OVER')
        }
    }
    moveMole()
}
start()
function restart() {
    window.location.reload()
}
document.querySelector('#restartButton').onclick = restart
// document.querySelector('#startButton').onclick = restart
