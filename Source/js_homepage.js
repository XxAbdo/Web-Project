let currentIndex = 0; // Starts us at the first picture

function moveSlide(direction) {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Update our current position based on which button was clicked (-1 or 1)
    currentIndex += direction;

    // Loop back to the beginning if we hit the end
    if (currentIndex >= totalSlides) {
    currentIndex = 0;
    } 
    // Loop back to the end if we hit the beginning
    else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
    }

    // Calculate how far to push the track to the left (e.g., -100%, -200%)
    const percentageToMove = currentIndex * -100;
    
    // Apply the CSS change via JavaScript
    track.style.transform = `translateX(${percentageToMove}%)`;
}