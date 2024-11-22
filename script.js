const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    // Detecting a double-click within 800ms
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e); // Create a heart on double click
            clickTime = 0; // Reset click time after double-click
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    // Create a new heart element
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart', 'heart'); // Add necessary classes
    
    // Get the position of the click within the loveMe div
    const x = e.clientX;
    const y = e.clientY;
    
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    
    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    
    // Position the heart where the click occurred
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    // Add heart to the loveMe container
    loveMe.appendChild(heart);

    // Update the heart counter
    times.innerHTML = ++timesClicked;

    // Remove the heart after animation completes (1 second)
    setTimeout(() => heart.remove(), 1000);
};
