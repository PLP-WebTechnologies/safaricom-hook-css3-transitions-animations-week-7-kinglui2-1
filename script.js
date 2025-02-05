// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function to demonstrate scope
let globalVariable = "I'm a global variable!";

function demonstrateScope() {
    let localVariable = "I'm a local variable!";
    console.log(globalVariable); // Accessing global variable
    console.log(localVariable); // Accessing local variable
}

// Function to toggle animation class
function toggleAnimation() {
    const spinner = document.getElementById('spinner');
    if (spinner.style.display === 'none' || spinner.style.display === '') {
        spinner.classList.add('show'); // Add class to show spinner
        spinner.style.display = 'block'; // Set display to block
    } else {
        spinner.classList.remove('show'); // Remove class to hide spinner
        setTimeout(() => {
            spinner.style.display = 'none'; // Set display to none after fade out
        }, 300); // Match the duration of the fade out
    }
}

// Event listener for area calculation
document.getElementById('calculateAreaBtn').addEventListener('click', function() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = calculateArea(length, width);
    document.getElementById('areaResult').innerText = `Area: ${area}`;
});

// Event listener for demonstrating scope
demonstrateScope();

// Event listener for toggling animation
document.getElementById('toggleAnimationBtn').addEventListener('click', toggleAnimation);
