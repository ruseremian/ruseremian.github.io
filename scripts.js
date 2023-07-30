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

var i = 0;
var txt = 'Hello, I\'m Ruslan';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("dynamic-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
