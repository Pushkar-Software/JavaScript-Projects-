function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Change background based on AM/PM
    if (ampm === 'AM') {
        document.body.style.background = 'linear-gradient(45deg, #2196F3, #4CAF50)'; // Morning colors
    } else {
        document.body.style.background = 'linear-gradient(45deg, #FF5722, #9C27B0)'; // Evening colors
    }
}

setInterval(updateClock, 1000);
updateClock()