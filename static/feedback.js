const bodyElement = document.querySelector('body')
const feedElement = document.createElement('span')
feedElement.id = 'feed-element'
feedElement.innerText = 'FEEDBACK'
feedElement.onclick = () => {
    console.log('click')
    // open a div
    // in the div make a form to contact
    // aniamte it!
}
bodyElement.appendChild(feedElement)


function sendMessage () {
    Email.send({
        SecureToken: "cb4bfaa1-3a0a-4a49-9ed5-c29f8f2671bd",
        To: 'feedback+contact=migue.pro@migue.pro',
        From: "feedback@migue.pro",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        // show something to the user about the feedback
        message => alert(message)
    );
}