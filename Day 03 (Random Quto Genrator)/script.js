// Array of random quotes
const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "Believe you can and you're halfway there.",
    "Happiness depends upon ourselves."
];

// Select button and display area
const button = document.getElementById("generator");
const quoteDisplay = document.getElementById("quote-display");

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerText = quotes[randomIndex];
}

// Add event listener to button
button.addEventListener("click", generateQuote);
