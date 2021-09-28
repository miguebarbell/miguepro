let displaying = false
function showMenu() {
    const menuDiv = document.querySelector('.menu')
    let ham = document.querySelector('.mini-ham-container')
    if (displaying) {
        menuDiv.style.display = 'none'
        displaying = false
        ham.style.setProperty('--ham1-rot', '0deg')
        ham.style.setProperty('--ham2-rot', '0deg')
        ham.style.setProperty('--ham1-h', '2rem')
        ham.style.setProperty('--ham2-h', '3rem')
    } else {
        menuDiv.style.display = 'flex'
        displaying = true
        ham.style.setProperty('--ham1-rot', '-45deg')
        ham.style.setProperty('--ham2-rot', '45deg')
        ham.style.setProperty('--ham1-h', '2.5rem')
        ham.style.setProperty('--ham2-h', '2.5rem')
    }
}
const nav = document.querySelector('nav')
const menu = document.createElement('div')
menu.innerHTML = '' +
    '<div class= "mini-ham-container" onClick = "showMenu()"></div>' +
    '<div class="menu">' +
    '<a href="https://www.migue.pro/games.html">Games</a>' +
    '<a href="https://www.migue.pro" title="not ready yet">DeepLearning</a>' +
    '<a href="https://www.migue.pro/index.html">Home</a>' +
    '<a href="mailto:contact@migue.pro" title="contact@migue.pro">Contact</a></div>'
nav.appendChild(menu)