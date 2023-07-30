window.onload = function() {
    const dynamicText = document.getElementById('dynamic-text');
    const text = ["Hello, I'm Ruslan!", "Welcome to my website!", "Let's explore my work!"];
    let i = 0;
    let isAdding = true;
    let currentText = "";

    function changeText() {
        if (isAdding) {
            if (currentText.length < text[i].length) {
                currentText = text[i].substring(0, currentText.length + 1);
            } else {
                isAdding = false;
                setTimeout(changeText, 2000); // Wait for 2 seconds before backspacing
                return;
            }
        } else {
            if (currentText.length > 0) {
                currentText = text[i].substring(0, currentText.length - 1);
            } else {
                isAdding = true;
                i = (i + 1) % text.length;
            }
        }
        dynamicText.innerHTML = currentText;
        setTimeout(changeText, isAdding ? 200 : 100); // Slower when adding characters, faster when backspacing
    }

    changeText();
    
    // Initializing AOS
    AOS.init({
        duration: 1200, // You can adjust the animation duration here
    });
}
