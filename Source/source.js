
/*--------------------------------------------------------------- Drop Down Menu -----------------------------------------------------------*/
let hamburger = document.querySelector('.hamburger-menu');
let dropmenu = document.querySelector('.drop-menu');

hamburger.addEventListener('click', function() { dropmenu.classList.toggle('active');});

document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !dropmenu.contains(event.target)) 
    {
        dropmenu.classList.remove('active');
    }
});



/*--------------------------------------------------------------- Image Sliding -----------------------------------------------------------*/
let currentIndex = 0;

function moveSlide(direction) 
{

    let track = document.getElementById('sliderTrack');
    let slides = document.querySelectorAll('.slide');
    let totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex >= totalSlides) 
    {
        currentIndex = 0;
    } 
    
    else if (currentIndex < 0) 
    {
        currentIndex = totalSlides - 1;
    }

    let percentageToMove = currentIndex * -100;
    
    track.style.transform = `translateX(${percentageToMove}%)`;
}



/*--------------------------------------------------------------- Settings Tab Switching -----------------------------------------------------------*/
let tabs = document.querySelectorAll('.tab-btn');
let panels = document.querySelectorAll('.settings-panel');
let dynamicTitle = document.getElementById('dynamic-title');

tabs.forEach(tab => { tab.addEventListener('click', () => {
    
    if(tab.textContent != "Log-Out")
    {
        
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');

        dynamicTitle.innerText = tab.innerText;
        
        let targetPanel = tab.getAttribute('data-target');
        document.getElementById(targetPanel).classList.add('active');
    }

});
});

/*--------------------------------------------------------------- Profile Tab Switching -----------------------------------------------------------*/
let profileBtns = document.querySelectorAll('.profile-btn');
let profileTabs = document.querySelectorAll('.profile-tab');

profileBtns.forEach(btn => btn.addEventListener('click', () =>{

    profileBtns.forEach(b => b.classList.remove('active'));
    profileTabs.forEach(t => t.classList.remove('active'));

    btn.classList.add('active');

    let targetTab = btn.getAttribute('data-target');
    document.getElementById(targetTab).classList.add('active');

}))






/*---------------------------------------------------------------- Search Functionality ------------------------------------------------------------*/

const availableGames = [
    { name: "Resident Evil Requiem",    url: "#",                                                   image: "../images/game_images/resident_evil_requiem/rer.jpg"},
    { name: "Detroit Become Human",     url: "../Indices/Games_Indicies/gametemplate_DBH.html",     image: "../images/game_images/detroit_become_human/detroit_become_human.jpg"}, 
    { name: "Forza Horizon 5",          url: "#",                                                   image: "../images/game_images/forza_horizon5/forza.jpg" },
    { name: "Space Flight Simulator",   url: "#",                                                   image: "../images/game_images/space_flight_sim/space_flight_sim_poster.png" },
    { name: "Call Of Duty: Warzone",    url: "#",                                                   image: "../images/game_images/call_of_duty_warzon/warzone.jpg" },
    { name: "Trailsmakers",             url: "#",                                                   image: "../images/game_images/trailsmakers/trailsmaker.jpg" },
    { name: "It Takes Two",             url: "#",                                                   image: "../images/game_images/it_takes_two/it_takes_two.jpg" },
    { name: "Cyber Punk 2077",          url: "#",                                                   image: "../images/game_images/cyberpunk2077/cyber_punk.jpg" },
    { name: "War Thunder",              url: "#",                                                   image: "../images/game_images/warthunder/warthunder.png" },
    { name: "Red Dead Redemption 2",    url: "../Indices/Games_Indicies/gametemplate_RDR2.html",    image: "../images/game_images/red_dead_redemtion2/red_dead_redemption2.png" }
];

let searchInput = document.querySelector('.search-input');
let suggestionsBox = document.getElementById('search-suggestions');

if (searchInput && suggestionsBox) 
{
    searchInput.addEventListener('focus', updateSuggestions);

    searchInput.addEventListener('input', updateSuggestions);

    
    document.addEventListener('click', function(event) {

        if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) 
        {
            suggestionsBox.style.display = 'none';
        }
    });
    
    

    function updateSuggestions() 
    {

        let query = searchInput.value.toLowerCase().trim();
        suggestionsBox.innerHTML = ''; 
        let matches = [];

        if (query === "") 
        {
            matches = availableGames.slice(0, 3); 
        } 
        else 
        {
            
            matches = availableGames.filter(game => 
                game.name.toLowerCase().includes(query)
            );
            
            matches = matches.slice(0, 3);
        }

        
        if (matches.length > 0) 
        {

            matches.forEach(match => {
                
                let div = document.createElement('div');
                div.classList.add('suggestion-item');
                
                
                let img = document.createElement('img');
                img.src = match.image;   
                img.alt = match.name;    
                
                
                let textSpan = document.createElement('span');
                textSpan.textContent = match.name; 
                
                
                div.appendChild(img);
                div.appendChild(textSpan);
                
                
                div.addEventListener('click', function() {
                    window.location.href = match.url; 
                });

                suggestionsBox.appendChild(div);
            });
            
            suggestionsBox.style.display = 'block'; // Make the box visible
        } 
        else 
        {
            let noResult = document.createElement('div');
            noResult.classList.add('suggestion-item');
            noResult.textContent = "No games found...";
            suggestionsBox.appendChild(noResult);
            suggestionsBox.style.display = 'block';
        }
        
        
    }
}