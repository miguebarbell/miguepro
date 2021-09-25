// todo: create a level chooser
document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [

        {
            name: 'pretzel',
            img: 'images/pretzel.jpeg'
        },
        {
            name: 'sandwich',
            img: 'images/sandwich.jpeg'
        },
        {
            name: 'taco',
            img: 'images/taco.jpeg'
        },
        {
            name: 'hamburger',
            img: 'images/hamburger.jpeg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.jpeg'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpeg'
        },
        {
            name: 'fries',
            img: 'images/fries.jpeg'
        },
        {
            name: 'bacon',
            img: 'images/bacon.jpeg'
        },
        {
            name: 'burrito',
            img: 'images/burrito.jpeg'
        },
        {
            name: 'chesseburger',
            img: 'images/chesseburger.jpeg'
        },
        {
            name: 'donut',
            img: 'images/donut.jpeg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpeg'
        },
        {
            name: 'pretzel',
            img: 'images/pretzel.jpeg'
        },
        {
            name: 'sandwich',
            img: 'images/sandwich.jpeg'
        },
        {
            name: 'taco',
            img: 'images/taco.jpeg'
        },
        {
            name: 'hamburger',
            img: 'images/hamburger.jpeg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.jpeg'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpeg'
        },
        {
            name: 'fries',
            img: 'images/fries.jpeg'
        },
        {
            name: 'bacon',
            img: 'images/bacon.jpeg'
        },
        {
            name: 'burrito',
            img: 'images/burrito.jpeg'
        },
        {
            name: 'chesseburger',
            img: 'images/chesseburger.jpeg'
        },
        {
            name: 'donut',
            img: 'images/donut.jpeg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpeg'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const winningTextElement = document.querySelector('[data-winning-message-text]')
    const winningMessageElement = document.getElementById('winningMessage')
    let cardsChosen = []
    let cardsChosenImg = []
    let cardsChosenId = []
    let cardsWon = []
    let tries = 0

    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/cover.jpeg')
            card.setAttribute('data-id', i)
            card.setAttribute('class', 'card')
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    function flipcard() {
        let cardId = this.getAttribute('data-id')
        // push the card from the cardArray based in their cardId, then get this name
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenImg.push(cardArray[cardId].img)
        cardsChosenId.push(cardId)
        tries += 1
        console.log(tries)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            grid.classList.add('disable')
            setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const oneId = cardsChosenId[0]
        const twoId = cardsChosenId[1]
        if (oneId === twoId) {
            alert('Choose Another Card, not the same')
            cardsChosen = []
            cardsChosenId = []
            cardsChosenImg = []
            cards[oneId].setAttribute('src', 'images/cover.jpeg')
            cards[twoId].setAttribute('src', 'images/cover.jpeg')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            // if (cardsChosenId[0] === cardsChosenId[1]) {
                alert('Match')
                cards[oneId].setAttribute('src', `${cardsChosenImg[0]}`)
                cards[twoId].setAttribute('src', `${cardsChosenImg[0]}`)
                cardsWon.push(cardsChosen)
        } else {
            cards[oneId].setAttribute('src', 'images/cover.jpeg')
            cards[twoId].setAttribute('src', 'images/cover.jpeg')
        }

        cardsChosen = []
        cardsChosenId = []
        cardsChosenImg = []
        grid.classList.remove('disable')
        resultDisplay.textContent = Number((cardsWon.length*1000/tries).toFixed(0))
        if (cardsWon.length === cardArray.length/2) {
            endGame()
            // alert('YOU WON!')
            // setTimeout(restart(), 5000)
        }

    }
    function endGame() {
        winningTextElement.innerText = `Discovered ${cardsWon.length} pairs,\n SCORE:${Number((cardsWon.length*1000/tries).toFixed(0))} CONGRATULATIONS,\n you made it!!`
        winningMessageElement.classList.add('show')
        document.querySelector('#finishButton').onclick = restart
    }
    function restart() {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
        }
        cardsWon = []
        resultDisplay.textContent = cardsWon.length
        cardArray.sort(() => 0.5 - Math.random())

        winningTextElement.innerText = ''
        winningMessageElement.classList.remove('show')
        winningMessageElement.classList.add('disable')
        createBoard()
    }

    document.querySelector('#restartButton').onclick = restart
    createBoard()

})
// todo: create a better alert for match
// todo: get the score from the server working
