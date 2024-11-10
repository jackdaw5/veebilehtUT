// Text to display with typing animation
const text = "Kõik vajalik ülikooli jaoks!";
const typingHeading = document.querySelector(".typing-heading");
let index = 0;

// Function to type out text one character at a time
function typeText() {
    if (index < text.length) {
        typingHeading.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // Adjust typing speed here
    } else {
        // Flashing cursor effect after typing is complete
        typingHeading.classList.add("stop-blink");
    }
}

// Start the typing effect
window.onload = typeText;
