const local_emulation = false
const highScoresMessageElement = document.getElementById('highScores')
const highScoresTextElement = document.querySelector('[data-high-scores-text]')
// document.querySelector('#restartButton').onclick = restart
function showHighScores() {
    highScoresMessageElement.classList.remove('hide')
    highScoresMessageElement.classList.add('show')
}
function highScores(game) {
    let url = `https://miguepro.herokuapp.com/scores/${game}`
    if (local_emulation === true) {
        url = `http://127.0.0.1:8000/scores/${game}`
    }
    // with one click on the screen the highscores will dissappear
    highScoresMessageElement.onclick = () => {
        highScoresMessageElement.classList.add('hide')
    }
    // create the div where the highscores will be and set a class for further styling
    const ol = document.createElement('ol')
    ol.classList.add('hsTable')
    fetch(url, {
        method: 'GET'
    }).then(response => response.json())
        .then(data => {
            ol.innerHTML = '<h1>TOP 5 High Scores</h1>'
            for (let i = 0; i < 5; i++) {
                console.log(data[i])
                let li = document.createElement('li')
                li.innerHTML = `<h3>NAME: ${data[i].name}</h3> <h4>SCORE: ${data[i].score}</h4>`
                ol.appendChild(li)
                highScoresTextElement.appendChild(ol)
            }
            highScoresMessageElement.classList.remove('hide')
            highScoresMessageElement.classList.add('show')
        })
}
function submitScore(game, result) {
    console.log(checkHighScore(game, result))
    if (checkHighScore(game, result)) {
        const name = prompt(`You scored ${result}, whats your name?`)
        if ((name !== '') && (name != null)) {
            let url = `https://miguepro.herokuapp.com/scores/s${game}`
            if (local_emulation === true) {
                url = `http://127.0.0.1:8000/scores/s${game}`
            }
            // const url = `https://miguepro.herokuapp.com/scores/s${game}`
            // const url = `http://127.0.0.1:8000/scores/s${game}`
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
}}
function checkHighScore(game, score) {
    let url = `https://miguepro.herokuapp.com/scores/${game}`
    if (local_emulation === true) {
        url = `http://127.0.0.1:8000/scores/${game}`
    }
    // let lowestScore
    try {
        fetch(url, {
            method: "GET"
        }).then(response => response.json())
            .then(data => {
                // lowestScore = data.score[4]
                return data.score[4] < score
            })
    } catch (err) {
        console.log(err)
        console.log('not enough high scores')
    } finally {
        return true
    }
    // if lowestScore < score {}
}