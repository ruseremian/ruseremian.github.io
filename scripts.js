var sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseover', function() {
    sidebar.classList.add('expanded');
});

sidebar.addEventListener('mouseout', function() {
    sidebar.classList.remove('expanded');
});

AOS.init({
    duration: 1200, // You can adjust the animation duration here
});

const dynamicText = document.getElementById('dynamic-text');
const text = ["Hello, I'm Ruslan!", "Welcome to my website!", "I'm a Data Analyst!", "Let's explore my work!"];
let i = 0;

function changeText() {
    dynamicText.innerHTML = text[i];
    i = (i + 1) % text.length;
}

setInterval(changeText, 2000); // Change text every 2 seconds
