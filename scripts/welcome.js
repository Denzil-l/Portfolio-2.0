const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')
const message3 = document.getElementById('message3')
const message4 = document.getElementById('message4')

const messages = [message1,message2,message3,message4]
let timeout = 1000
for (let i = 0; i < 4; i++) {
    timeout = timeout + 1500

    setTimeout(() => {
        messages[i].style.animation = 'appear 2.5s forwards linear'
    }, timeout);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      scrollToTarget("targetElement");
    }, 10000);
  });
  
  function scrollToTarget(elementId) {
    var targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  }