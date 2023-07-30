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
        setTimeout(changeText, isAdding ? 50 : 25); // Slower when adding characters, faster when backspacing
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

    window.addEventListener('keydown', function(event) {
        // Check the key code of the pressed key
        switch (event.keyCode) {
            case 38:  // Up arrow
                // The user pressed the up arrow, scroll up
                currentSectionIndex--;
                if (currentSectionIndex < 0) {
                    // Don't scroll past the first section
                    currentSectionIndex = 0;
                }
                break;
            case 40:  // Down arrow
                // The user pressed the down arrow, scroll down
                currentSectionIndex++;
                if (currentSectionIndex >= sections.length) {
                    // Don't scroll past the last section
                    currentSectionIndex = sections.length - 1;
                }
                break;
            default:
                // The user pressed a key that we're not interested in
                return;
        }

        // Scroll to the current section
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });

        // Prevent the default scroll behavior
        event.preventDefault();
    }, { passive: false });  // Important to make preventDefault work

 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById('back-to-top').addEventListener('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
    
    // Rest of your particlesJS code...

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
