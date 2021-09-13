const grid = document.getElementById('grid')
const player = document.getElementById('player')
// add the cells
function createGrid(quantity, atribute= []) {
    for (let i = 0; i < quantity; i++) {
        let div = document.createElement('div')
        if (atribute) {
            div.setAttribute(atribute[0], atribute[1])
        }
        // div.onclick = markIt(i)
        grid.appendChild(div)
    }
}
let currentPlayer = ' Red'
const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]
]


createGrid(42, ['class', 'square'])
createGrid(7, ['class', 'taken'])
const squares = document.querySelectorAll('#grid div')

function markIt(i) {
    if (squares[i].classList.contains('taken')) {
        alert('Already Taken')
    } else if (squares[i+7].classList.contains('taken')) {
        if (currentPlayer === ' Red') {
            squares[i].setAttribute('class', 'taken player-one')
            currentPlayer = 'Blue'
        } else {
            squares[i].setAttribute('class', 'taken player-two')
            currentPlayer = ' Red'
        }
    }
    checkBoard()
    player.innerHTML = currentPlayer
}
for (let i=0; i< squares.length; i++) {
    squares[i].setAttribute('onclick', `markIt(${i})`)
}
function checkBoard() {
    // console.log(document.querySelectorAll('.taken').length)
    for (let i = 0; i < winningArrays.length; i++) {
        const combination0 = squares[winningArrays[i][0]]
        const combination1 = squares[winningArrays[i][1]]
        const combination2 = squares[winningArrays[i][2]]
        const combination3 = squares[winningArrays[i][3]]
        if (combination0.classList.contains('player-one') &&
        combination1.classList.contains('player-one') &&
        combination2.classList.contains('player-one') &&
        combination3.classList.contains('player-one')) {
            endGame('RED', i)
        } else if (combination0.classList.contains('player-two') &&
        combination1.classList.contains('player-two') &&
        combination2.classList.contains('player-two') &&
        combination3.classList.contains('player-two')) {
            endGame('BLUE', i)
        } else if (document.querySelectorAll('.taken').length === 49) {
            endGame('Draw', -1)
        }
        // make the check for a draw, check for 21 blue
    }
}
function restart() {
    window.location.reload()
}

function winDialog(player) {
    const winningTextElement = document.querySelector('[data-winning-message-text]')
    const winningMessageElement = document.getElementById('winningMessage')
    winningTextElement.innerText = `${player} WON!,\n CONGRATULATIONS,\n thanks both for playing!`
    winningMessageElement.classList.add('show')
    document.querySelector('#startButton').onclick = restart
}
function endGame(player, combination) {
    console.log(winningArrays[combination])
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('disable')
        if (winningArrays[combination].includes(i)) {
            squares[i].classList.add('win')
        } else {
            squares[i].classList.add('rest')
        }
    }
    setTimeout(function () {
        winDialog(player)
    }, 3000)
    // const winningTextElement = document.querySelector('[data-winning-message-text]')
    const winningMessageElement = document.getElementById('winningMessage')
    if (player === 'Draw') {
        winningTextElement.innerText = `it's a DRAW,\n let's undraw it!!!`
    } else {
        winningTextElement.innerText = `${player} WON!,\n CONGRATULATIONS,\n thanks both for playing!`
    }
    winningMessageElement.classList.add('show')
    document.querySelector('#startButton').onclick = restart
}
document.querySelector('#restartButton').onclick = restart