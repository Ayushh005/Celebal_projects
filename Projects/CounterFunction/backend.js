let counter = 0;
const countingElement = document.getElementById("counting");

// Initialize the counter display
document.addEventListener('DOMContentLoaded', function() {
    updateCounterDisplay();
});

function updateCounterDisplay() {
    countingElement.innerText = counter;

    // Add animation class
    countingElement.classList.add('counter-animate');

    // Remove animation class after animation completes
    setTimeout(() => {
        countingElement.classList.remove('counter-animate');
    }, 300);

    // Change color based on value
    if (counter > 0) {
        countingElement.style.color = '#48bb78'; // Green for positive
    } else if (counter < 0) {
        countingElement.style.color = '#f56565'; // Red for negative
    } else {
        countingElement.style.color = '#2d3748'; // Default for zero
    }
}

function increment() {
    counter++;
    updateCounterDisplay();

    // Add button feedback
    const btn = event.target.closest('.btn-increment');
    btn.style.transform = 'translateY(-1px) scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
}

function decrement() {
    counter--;
    updateCounterDisplay();

    // Add button feedback
    const btn = event.target.closest('.btn-decrement');
    btn.style.transform = 'translateY(-1px) scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
}

function reset() {
    counter = 0;
    updateCounterDisplay();

    // Add button feedback
    const btn = event.target.closest('.btn-reset');
    btn.style.transform = 'translateY(-1px) scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);

    // Add special reset animation
    countingElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countingElement.style.transform = 'scale(1)';
    }, 200);
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
        case '+':
            increment();
            break;
        case 'ArrowDown':
        case '-':
            decrement();
            break;
        case 'r':
        case 'R':
        case '0':
            reset();
            break;
    }
});

// Add smooth transitions
countingElement.style.transition = 'all 0.3s ease';