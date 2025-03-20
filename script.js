let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;

// Select elements
const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

// Update display on page load
updateDisplay();

// Event Listeners
increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
    saveToLocalStorage();
});

decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
    saveToLocalStorage();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
    saveToLocalStorage();
});

// Function to update display
function updateDisplay() {
    countDisplay.textContent = count;
}

// Function to save count to localStorage
function saveToLocalStorage() {
    localStorage.setItem("count", count);
}
