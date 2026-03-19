


let hamburger = document.querySelector('.hamburger-menu');
let dropmenu = document.querySelector('.drop-menu');
hamburger.addEventListener('click', function() { dropmenu.classList.toggle('active');});



let currentIndex = 0;

function moveSlide(direction) {

    let track = document.getElementById('sliderTrack');
    let slides = document.querySelectorAll('.slide');
    let totalSlides = slides.length;

    
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
    currentIndex = 0;
    } 
    
    else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
    }

    // Calculate how far to push the track to the left (e.g., -100%, -200%)
    let percentageToMove = currentIndex * -100;
    
    // Apply the CSS change via JavaScript
    track.style.transform = `translateX(${percentageToMove}%)`;
}






// 1. Grab all the buttons, panels, and the title from the HTML

let tabs = document.querySelectorAll('.tab-btn');
let panels = document.querySelectorAll('.settings-panel');
let dynamicTitle = document.getElementById('dynamic-title');

// 2. Loop through every single button so they all listen for clicks
tabs.forEach(tab => { tab.addEventListener('click', () => {
    
    // Step A: Turn off the old button and hide all panels
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    // Step B: Turn on the button that was just clicked
    tab.classList.add('active');

    // Step C: Change the big title to match the button's text
    dynamicTitle.innerText = tab.innerText;

    // Step D: Find the correct panel using the data-target name, and turn it on
    const targetPanelId = tab.getAttribute('data-target');
    document.getElementById(targetPanelId).classList.add('active');
    
});
});
