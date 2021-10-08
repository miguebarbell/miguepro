let displaying = false
function showMenu() {
    const menuDiv = document.querySelector('.menu')
    let ham = document.querySelector('.mini-ham-container')
    function hideMenu() {
        menuDiv.style.display = 'none'
        displaying = false
        ham.style.setProperty('--ham1-rot', '0deg')
        ham.style.setProperty('--ham2-rot', '0deg')
        ham.style.setProperty('--ham1-h', '2rem')
        ham.style.setProperty('--ham2-h', '3rem')
    }
    function displayMenu() {
        menuDiv.style.display = 'flex'
        displaying = true
        ham.style.setProperty('--ham1-rot', '-45deg')
        ham.style.setProperty('--ham2-rot', '45deg')
        ham.style.setProperty('--ham1-h', '2.5rem')
        ham.style.setProperty('--ham2-h', '2.5rem')
    }
    menuDiv.addEventListener('click', () => {
        hideMenu()
    } )
    if (displaying) {
        hideMenu()
    } else {
        displayMenu()
    }
}
const nav = document.querySelector('nav')
const menu = document.createElement('div')
menu.innerHTML = '' +
    '<div class= "mini-ham-container" onClick = "showMenu()"></div>' +
    '<div class="menu">' +
    '<a href="/static/games/games.html">Games</a>' +
    '<a href="/index.html#deeplearning" title="Deep Learning Projects">DeepLearning</a>' +
    '<a href="/index.html#web-programmer" title="Web Programmer Projects">Web Programmer</a>' +
    '<a href="/index.html" title="Home" class="home-icon"/></a>' +
    '<a href="/index.html#contact" title="contact@migue.pro">Contact</a></div>'
nav.appendChild(menu)

