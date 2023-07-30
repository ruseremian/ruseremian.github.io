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
        setTimeout(changeText, isAdding ? 400 : 200); // Slower when adding characters, faster when backspacing
    }

    changeText();
    
    // Initializing AOS
    AOS.init({
        duration: 1200, // You can adjust the animation duration here
    });

  const sections = [document.querySelector('header')].concat(Array.from(document.querySelectorAll('.full-screen-section')));
    let currentSectionIndex = 0;

    window.addEventListener('wheel', function(event) {
        // Check the direction of the scroll
        if (event.deltaY > 0) {
            // The user scrolled down
            currentSectionIndex++;
            if (currentSectionIndex >= sections.length) {
                // Don't scroll past the last section
                currentSectionIndex = sections.length - 1;
            }
        } else {
            // The user scrolled up
            currentSectionIndex--;
            if (currentSectionIndex < 0) {
                // Don't scroll past the first section
                currentSectionIndex = 0;
            }
        }

        // Scroll to the current section
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });

        // Prevent the default scroll behavior
        event.preventDefault();
    }, { passive: false });  // Important to make preventDefault work
}
