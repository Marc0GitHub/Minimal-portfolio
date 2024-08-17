function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");

  const image = document.getElementById("my-image");
  const cursor = document.getElementById("cursor");
  const video = document.getElementById("myVideo");
  const circle = document.getElementById("circle");
  const circles = document.getElementById("circle");
  const grow = document.getElementById("circleGrow");
  
  
  if (element.classList.contains("dark-mode")) {
    image.src = "scr/sun-8727 (2).svg"; // Update with the correct path for the white icon
    cursor.classList.remove("cursor-light");
    cursor.classList.add("cursor-dark");
    video.classList.add("invert-video");
    circle.classList.add("circle-dark");
    circles.classList.add("circles-dark");
    grow.classList.add("circleGrow-dark");
    
  } else {
    image.src = "scr/dark-mode-6682 (2).svg"; // Update with the correct path for the dark icon
    cursor.classList.remove("cursor-dark");
    cursor.classList.add("cursor-light");
    circle.classList.add("circle-light");
    circles.classList.add("circles-light");
    grow.classList.add("circleGrow-light");


    
  }
}

// Typewriter effect
function typeWriter(text, elementId, cursorId, speed) {
  let i = 0;
  const element = document.getElementById(elementId);
  const cursor = document.getElementById(cursorId);

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      cursor.style.display = 'none'; // Hide cursor after typing
    }
  }

  type();
}

// Function to progressively remove the blur effect
function removeBlur() {
  const image = document.getElementById("slow-loading-image");
  let blurAmount = 10; // Start with a high blur
  const step = 0.1; // Decrease in blur per step
  const interval = 10; // Time between steps in milliseconds

  function reduceBlur() {
    if (blurAmount > 0) {
      blurAmount -= step;
      image.style.filter = `blur(${blurAmount}px)`;
      setTimeout(reduceBlur, interval);
    } else {
      image.style.filter = 'blur(0px)'; // Ensure final state is no blur
    }
  }

  reduceBlur();
}

// Start the typewriter effect on window load
window.onload = function() {
  const text = "Hello! I'm Marco, a passionate creative. I thrive on transforming my emotions into innovative ideas that resonate with others. Welcome to my site, where creativity meets inspiration. Dive in and explore my world.";
  document.getElementById("text").innerText = ''; // Clear initial text
  typeWriter(text, "text", "cursor", 50); // Adjust speed (milliseconds) as needed

  // Set initial cursor color
  const cursor = document.getElementById("cursor");
  if (document.body.classList.contains("dark-mode")) {
    cursor.classList.add("cursor-dark");
    
  } else {
    cursor.classList.add("cursor-light");
  }
  

  // Remove the blur effect progressively
  removeBlur();
};

const circleGrow = document.getElementById('circleGrow');
let holding = false;
let congratsTimeout;
let isCongratsDisplayed = false;

function startShaking() {
    if (!holding && !isCongratsDisplayed) {
        holding = true;
        circleGrow.style.animation = 'shake 0.1s infinite';
        
        // Set a timeout to change the text after 5 seconds (5000 milliseconds)
        congratsTimeout = setTimeout(() => {
            circleGrow.innerHTML = '<p>Patience treasures time.</p>';
            isCongratsDisplayed = true;
        }, 10000); // Change to 50000 for 50 seconds
    }
}

function stopShaking() {
    if (holding) {
        holding = false;
        clearTimeout(congratsTimeout);
        circleGrow.style.animation = 'none';
        
        // Reset text only if "congratulations" is not displayed
        if (!isCongratsDisplayed) {
            circleGrow.innerHTML = '<p>Patience</p>';
        }
    }
}

// Mouse events
circleGrow.addEventListener('mousedown', startShaking);
circleGrow.addEventListener('mouseup', stopShaking);
circleGrow.addEventListener('mouseleave', stopShaking);

// Touch events
circleGrow.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startShaking();
});
circleGrow.addEventListener('touchend', stopShaking);
circleGrow.addEventListener('touchcancel', stopShaking);

AOS.init();