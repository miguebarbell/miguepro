const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
let circleTurn
let winCombination


startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    winCombination = []
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.classList.remove('red', 'disable')
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true})
    })

    setHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMarker(cell, currentClass)
    if (checkWin(currentClass)) {
        markRedWin(winCombination)
        setTimeout(() => { endGame(false)}, 2000)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setHoverClass()
    }
}

function placeMarker(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)

    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATION.some(combination => {
        return combination.every(index => {
            winCombination = combination
            return cellElements[index].classList.contains(currentClass)
        })
    })

}

function endGame(draw) {
    if (draw) {
        winningTextElement.innerText = 'Draw!'
    } else {
        winningTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function markRedWin(combination) {
    console.log(combination)
    for (let cellNumber in combination) {
        document.getElementById(combination[cellNumber]).classList.add('red')
    }
    cellElements.forEach(cell => {
        cell.classList.add('disable')
    })
}