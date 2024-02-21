// Retrieve the click count from localStorage
let clickCount = localStorage.getItem('clickCount');

// If clickCount is null, initialize it to 0
if (clickCount === null) {
  clickCount = 0;
} else {
  // Otherwise, convert it to a number
  clickCount = parseInt(clickCount);
}

// Function to handle click event
export function handleClick() {
  // Increment the click count
  clickCount++;
  
  // Update the displayed click count
  document.getElementById('clickCountDisplay').innerText = clickCount;
  
  // Save the updated click count to localStorage
  localStorage.setItem('clickCount', clickCount);
}

// Add click event listener to the document
document.addEventListener('click', handleClick);

// Initialize the displayed click count
document.getElementById('clickCountDisplay').innerText = clickCount;