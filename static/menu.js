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