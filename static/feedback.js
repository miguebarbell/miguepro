const bodyElement = document.querySelector('body')
const feedElement = document.createElement('span')
feedElement.id = 'feed-element'
feedElement.innerText = 'FEEDBACK'
feedElement.setAttribute('title', 'Send your feedback or just say HI!.')
// const apiAdrr = 'https://www.migue.pro'
let displayingFeedbackElement = false

// create the div for styling and the form
const formDiv = document.createElement('div')
formDiv.innerText = 'Share your feedback please!'
const form = document.createElement('form')
// the name
// form.setAttribute('action', apiAdrr)
// form.setAttribute('method', 'POST')
form.setAttribute('onsubmit', 'return false')

formDiv.id = 'feedback-form'
const name = document.createElement('input')
name.setAttribute('type', 'text')
name.setAttribute('name', 'name')
name.setAttribute('placeholder', 'Your Name or Email')
name.setAttribute("required", "")
form.append(name)
// the text
const feedbackText = document.createElement('textarea')
feedbackText.setAttribute('type', 'text')
feedbackText.setAttribute('name', 'feedback')
feedbackText.setAttribute('placeholder', 'Your thoughts please...')
feedbackText.setAttribute("required", "")
feedbackText.setAttribute('rows', '6')
form.append(feedbackText)
// the button
const button = document.createElement('input')
button.setAttribute('type', 'submit')
button.setAttribute('value', 'Submit')
button.onclick = () => {
    if (feedbackText.value !== '' && name.value !== '') {
        // send the message
        console.log('Feedback sent!. Thanks for reaching out')
        displayingFeedbackElement = false
        document.querySelector('body').removeChild(formDiv)
        name.value = ''
        feedbackText.value = ''
        alert('Server is down, please reach at contact@migue.pro')

    }
}
form.append(button)
// say thanks after the button
formDiv.append(form)
feedElement.onclick = () => {
    if (displayingFeedbackElement) {
        displayingFeedbackElement = false
        document.querySelector('body').removeChild(formDiv)
    } else {
        displayingFeedbackElement = true
        document.querySelector('body').appendChild(formDiv)
    }
}
bodyElement.appendChild(feedElement)

