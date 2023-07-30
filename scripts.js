const dynamicText = document.getElementById('dynamic-text');
const text = ["Hello, I'm Ruslan!", "Welcome to my website!", "Let's explore my work!"];
let i = 0;

function changeText() {
    dynamicText.innerHTML = text[i];
    i = (i + 1) % text.length;
}

setInterval(changeText, 2000); // Change text every 2 seconds
    
    // Initializing AOS
    AOS.init({
        duration: 1200, // You can adjust the animation duration here
    });
}
