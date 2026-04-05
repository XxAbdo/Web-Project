


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

   
    let percentageToMove = currentIndex * -100;
    
    
    track.style.transform = `translateX(${percentageToMove}%)`;
}








let tabs = document.querySelectorAll('.tab-btn');
let panels = document.querySelectorAll('.settings-panel');
let dynamicTitle = document.getElementById('dynamic-title');


tabs.forEach(tab => { tab.addEventListener('click', () => {
    
    if(tab.textContent != "Log-Out"){
        
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

    
        tab.classList.add('active');

        
        dynamicTitle.innerText = tab.innerText;

        
        let targetPanelId = tab.getAttribute('data-target');
        document.getElementById(targetPanelId).classList.add('active');
    }
    
    
});
});
