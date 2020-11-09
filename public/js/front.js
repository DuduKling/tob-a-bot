let speechBubble = document.getElementsByClassName('speechBubble');
let chatIframeContainer = document.getElementsByClassName('chatIframeContainer');

function toggleChat() {
    speechBubble[0].classList.toggle('hide');
    chatIframeContainer[0].classList.toggle('hide');
}
