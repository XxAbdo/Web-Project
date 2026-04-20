
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
    { name: "Detroit Become Human",     url: "../Indices/detroidbase.html",     image: "../images/game_images/detroit_become_human/detroit_become_human.jpg"}, 
    { name: "Forza Horizon 5",          url: "#",                                                   image: "../images/game_images/forza_horizon5/forza.jpg" },
    { name: "Space Flight Simulator",   url: "#",                                                   image: "../images/game_images/space_flight_sim/space_flight_sim_poster.png" },
    { name: "Call Of Duty: Warzone",    url: "#",                                                   image: "../images/game_images/call_of_duty_warzon/warzone.jpg" },
    { name: "Trailsmakers",             url: "#",                                                   image: "../images/game_images/trailsmakers/trailsmaker.jpg" },
    { name: "It Takes Two",             url: "#",                                                   image: "../images/game_images/it_takes_two/it_takes_two.jpg" },
    { name: "Cyber Punk 2077",          url: "#",                                                   image: "../images/game_images/cyberpunk2077/cyber_punk.jpg" },
    { name: "War Thunder",              url: "#",                                                   image: "../images/game_images/warthunder/warthunder.png" },
    { name: "Red Dead Redemption 2",    url: "../Indices/rdr2base.html",    image: "../images/game_images/red_dead_redemtion2/red_dead_redemption2.png" }
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



/*------------------------------------------------------------login Panel Switching--------------------------------------------------------------*/
let log_center = document.querySelectorAll('.login-center');
let page_btns = document.querySelectorAll('.log-btn');

page_btns.forEach(btn => btn.addEventListener('click', () => {

    log_center.forEach(t => t.classList.remove('active'));

    let target_panel = btn.getAttribute('data-target');
    document.getElementById(target_panel).classList.add('active');

}))



/*----------------------------------------------------------Change Password Validation----------------------------------------------------------------*/
let ChangePasswordValidation = document.getElementById("change-password-validation");
let ChangePasswordEmail = document.getElementById("change-password-email");

function VerifyChangePassword() {
    
    let ChangePasswordValidation = document.getElementById("change-password-validation");
    let ChangePasswordEmail = document.getElementById("change-password-email");
    let EmailExist = false;

    if (ChangePasswordEmail.textContent.length != 0) {
        EmailExist = true;
        ChangePasswordValidation.textContent = "We sent you an email to change your password";
        ChangePasswordValidation.style.color = "lime";
    }
    else {
        ChangePasswordValidation.textContent = "Please enter your email.";
        ChangePasswordValidation.style.color = "red";
    }

    if (EmailExist == true) {
        ChangePasswordValidation.textContent = "We sent you an email to change your password";
        ChangePasswordValidation.style.color = "lime";
    }

}












// Initialize the database
let usersDB = JSON.parse(sessionStorage.getItem('myAppUsers')) || [];

if (!usersDB.find(u => u.username === 'Eren_yeager')) {
    usersDB.push({ username: 'Eren_yeager', email: 'eren@test.com', password: '123' });
    sessionStorage.setItem('myAppUsers', JSON.stringify(usersDB));
}


function applyDynamicUserState(currentUser) {
    
    if (window.location.pathname.includes('Profile.html')) {
        let profileName = document.querySelector('.profile-info h1');
        let stats = document.querySelector('.stat-number');
        let gamesList = document.getElementById('games-list');
        let friendsList = document.getElementById('friends-tab');
        let profilePfp = document.querySelector('.profile-header img');

        if (profileName) profileName.textContent = currentUser;

        // If it's a brand new user, clear out Eren's hardcoded data!
        if (currentUser !== 'Eren_yeager') {
            if (stats) stats.textContent = '🏆 0';
            if (gamesList) gamesList.innerHTML = '<p style="color:var(--text-muted); margin-top:20px;">No games played yet. Go discover some!</p>';
            if (friendsList) friendsList.innerHTML = '<p style="color:var(--text-muted); margin-top:20px;">No friends yet. Start connecting!</p>';
            if (profilePfp) profilePfp.src = '../Images/website_images/website_logo.png';
        }
    }

    
    if (window.location.pathname.includes('settings.html')) {
        let displayNameInput = document.getElementById('display-name');
        let usernameInput = document.getElementById('username');
        let settingsPfp = document.getElementById('avatar-preview');

        
        if (currentUser !== 'Eren_yeager') {
            if (displayNameInput) displayNameInput.value = currentUser;
            if (usernameInput) usernameInput.value = '@' + currentUser.toLowerCase();
            if (settingsPfp) settingsPfp.src = '../Images/website_images/website_logo.png';
        }
        
        // Handle Settings Page Logout button
        let settingsLogout = document.getElementById('settings-logout-btn');
        if (settingsLogout) {
            settingsLogout.addEventListener('click', function(e) {
                e.preventDefault();
                sessionStorage.setItem('isLoggedIn', 'false');
                window.location.href = 'login_signup.html';
            });
        }
    }

    if (window.location.pathname.includes('library.html')) {
        let libWrapper = document.getElementById("lib-wrapper");

        if (currentUser !== 'Eren_yeager') {
            
            if(libWrapper) {libWrapper.innerHTML = `<p style="color:var(--text-muted); margin-top:20px;">No games played yet. Go discover some!</p>`}
    
        }
    }
}


checkAuthState();



/*------------------------------------------------------------- AUTHENTICATION STATE & DYNAMIC UI -------------------------------------------------------------*/
function checkAuthState() {
    let isLoggedIn = sessionStorage.getItem('isLoggedIn');
    let currentUser = sessionStorage.getItem('currentUsername');
    
    let privateElements = document.querySelectorAll('.pfp, .nav_username, .settings, .cart, .lib');
    let dropmenu = document.querySelector('.drop-menu');

    if (isLoggedIn === 'true') {

        privateElements.forEach(el => el.style.display = ''); 
        

        let navNameElement = document.querySelector('.nav_username');
        let navPfp = document.querySelector('.pfp');
        
        if (navNameElement) navNameElement.textContent = currentUser;
        
        if (currentUser !== 'Eren_yeager') {
           navPfp.innerHTML = `
                                <svg class="account-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                </svg>`
        }


        if(dropmenu) {
            dropmenu.innerHTML = `
                <a href="news.html">News</a>
                <a href="Profile.html">Profile</a>
                <a>Browse</a>
                <a href="#" id="logout-btn">Log-Out</a>
            `;
            document.getElementById('logout-btn').addEventListener('click', function(e) {
                e.preventDefault();
                sessionStorage.setItem('isLoggedIn', 'false');
                window.location.href = 'login_signup.html'; 
            });
        }

        
        applyDynamicUserState(currentUser);

    } 
    else {
        
        privateElements.forEach(el => el.style.display = 'none');
        
        if(dropmenu) {
            dropmenu.innerHTML = `
                <a href="news.html">News</a>
                <a>Browse</a>
                <a href="login_signup.html">Log-In / Sign-Up</a>
            `;
        }

        // Security Guard: Kick guests out of private pages
        let currentPage = window.location.pathname;
        if (currentPage.includes('Profile.html') || currentPage.includes('settings.html') || currentPage.includes('gaming-cart.html') || currentPage.includes('library.html')) {
            window.location.href = 'login_signup.html';
        }
    }
}




/*------------------------------------------------------------- LOGIN VALIDATION -------------------------------------------------------------*/
function VerifyLogin() {
    let LoginUsername = document.getElementById("login-username").value.trim();
    let LoginPassword = document.getElementById("login-password").value;
    let LoginValidation = document.getElementById("login-validation");

    if (LoginUsername === "" || LoginPassword === "") {
        LoginValidation.textContent = "Please enter both username and password.";
        LoginValidation.style.color = "red";
        return;
    }

    // Search for a matching user in the DB
    let validUser = usersDB.find(user => user.username === LoginUsername && user.password === LoginPassword);

    if (validUser) {
        LoginValidation.textContent = "Login successful! Redirecting...";
        LoginValidation.style.color = "lime";
        
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('currentUsername', validUser.username); 
        
        setTimeout(() => { window.location.href = "index.html"; }, 1000);
    } else {
        LoginValidation.textContent = "Invalid username or password.";
        LoginValidation.style.color = "red";
    }
}

/*----------------------------------------------------------- SIGN-UP VALIDATION ---------------------------------------------------------------*/
function VerifySignUp() {
    let Password = document.getElementById("password1").value;
    let ConfirmPassword = document.getElementById("password2").value;
    let NewUsername = document.getElementById("new-username").value.trim(); 
    let NewEmail = document.getElementById("new-email").value.trim();
    let checkbox = document.getElementById("TOS-Checkbox");
    let SignUpValidation = document.getElementById("sign-up-validation");

    if (!checkbox.checked) {
        SignUpValidation.textContent = "Please agree to the Terms of Service.";
        SignUpValidation.style.color = "red";
        return; 
    }
    if (NewUsername === "" || NewEmail === "") {
        SignUpValidation.textContent = "Please fill in all fields.";
        SignUpValidation.style.color = "red";
        return;
    }
    if (Password.length < 8 || Password !== ConfirmPassword) {
        SignUpValidation.textContent = "Passwords must be at least 8 characters and match.";
        SignUpValidation.style.color = "red";
        return;
    }

    // Check if the username is already taken
    let userExists = usersDB.some(user => user.username === NewUsername || user.email === NewEmail);
    if (userExists) {
        SignUpValidation.textContent = "Username or Email is already taken!";
        SignUpValidation.style.color = "red";
        return;
    }

    // Save the new user to the database
    let newUser = { username: NewUsername, email: NewEmail, password: Password };
    usersDB.push(newUser); 
    sessionStorage.setItem('myAppUsers', JSON.stringify(usersDB)); 

    SignUpValidation.textContent = "Account created! Please log in.";
    SignUpValidation.style.color = "lime";

    // Switch back to login panel automatically
    setTimeout(() => {
        document.querySelectorAll('.login-center').forEach(t => t.classList.remove('active'));
        document.getElementById('login-panel').classList.add('active');
    }, 1500);
}




/* =====================================================GAME BASE PAGE===================================================== */

/* ---- FUNCTION 1: Add to Cart counter ---- */

let cartCount = 0;

function addToCart() {
    cartCount = cartCount + 1;
    let badge = document.getElementById('cart-count');
    badge.innerText = cartCount;
    badge.style.display = 'block';
    alert('Detroit: Become Human added to cart! (' + cartCount + ' item(s) in cart)');
}

/* ---- FUNCTION 2: Wishlist toggle ---- */

let isWishlisted = false;

function toggleWishlist() {
    let wishBtn = document.getElementById('wishlist-btn');
    if (isWishlisted === false) {
        isWishlisted = true;
        wishBtn.innerText = '♥ Wishlisted';
        wishBtn.classList.add('wishlisted');
    } else {
        isWishlisted = false;
        wishBtn.innerText = '♡ Add To Wishlist';
        wishBtn.classList.remove('wishlisted');
    }
}

/* ---- FUNCTION 3: Star rating ---- */

let userRating = 0;
let ratingLabels = ['', '1 / 5 — Poor', '2 / 5 — Fair', '3 / 5 — Good', '4 / 5 — Great', '5 / 5 — Excellent'];

function rateGame(score) {
    userRating = score;
    let stars = document.querySelectorAll('.star');
    let i = 0;
    while (i < stars.length) {
        if (i < score) { stars[i].classList.add('filled'); }
        else            { stars[i].classList.remove('filled'); }
        i = i + 1;
    }
    document.getElementById('rating-label').innerText = ratingLabels[score];
}

/* ---- FUNCTION 4: Screenshot slider ---- */

let ssIndex = 0;

function moveScreenshot(direction) {
    let track  = document.getElementById('ss-slider-track');
    let slides = document.querySelectorAll('.ss-slide');
    let total  = slides.length;

    ssIndex = ssIndex + direction;

    if (ssIndex > total - 3) { ssIndex = 0; }
    if (ssIndex < 0)          { ssIndex = total - 3; }

    let moveAmount = ssIndex * -33.333;
    track.style.transform = 'translateX(' + moveAmount + '%)';
}

/* ---- FUNCTION 5: Screenshot overlay with navigation ---- */

let currentScreenshotList = []; 
let overlayIndex = 0;

function openOverlay(clickedImage, index) {
    // 2. This logic finds only the screenshots on the CURRENT page
    const imagesOnPage = document.querySelectorAll('#ss-slider-track .screenshot');
    
    // 3. Convert those images into a list of their 'src' URLs
    currentScreenshotList = Array.from(imagesOnPage).map(img => img.src);
    
    overlayIndex = index;
    document.getElementById('overlay-img').src = clickedImage.src;
    document.getElementById('screenshot-overlay').style.display = 'block';
}

function closeOverlay() {
    document.getElementById('screenshot-overlay').style.display = 'none';
}

function overlayNavigate(direction, event) {
    event.stopPropagation();
    overlayIndex = overlayIndex + direction;

    // 4. Navigate using the dynamic list we just built
    if (overlayIndex >= currentScreenshotList.length) { 
        overlayIndex = 0; 
    }
    if (overlayIndex < 0) { 
        overlayIndex = currentScreenshotList.length - 1; 
    }

    document.getElementById('overlay-img').src = currentScreenshotList[overlayIndex];
}

/* ---- FUNCTION 6: Tab switcher ---- */

function switchTab(tabName) {
    let panels  = document.querySelectorAll('.gb-tab-panel');
    let buttons = document.querySelectorAll('.gb-tab-btn');

    let i = 0;
    while (i < panels.length)  { panels[i].classList.remove('active');  i = i + 1; }
    let j = 0;
    while (j < buttons.length) { buttons[j].classList.remove('active'); j = j + 1; }

    document.getElementById('tab-' + tabName).classList.add('active');

    let k = 0;
    while (k < buttons.length) {
        if (buttons[k].innerText.toLowerCase() === tabName) { buttons[k].classList.add('active'); }
        k = k + 1;
    }
}

/* ---- FUNCTION 7: Review form submission ---- */

function submitReview() {
    let name  = document.getElementById('review-name').value;
    let text  = document.getElementById('review-text').value;
    let score = document.getElementById('review-score-select').value;
    let confirmation = document.getElementById('review-confirmation');

    if (name === '' || text === '' || score === '') {
        confirmation.innerText = '⚠ Please fill in all fields before submitting.';
        confirmation.style.color = '#cc3333';
        confirmation.style.display = 'block';
        return;
    }

    confirmation.innerText = '✓ Review submitted! Thank you, ' + name + '.';
    confirmation.style.color = '#27ae60';
    confirmation.style.display = 'block';

    let starString = '';
    let s = 1;
    while (s <= 5) {
        if (s <= score) { starString = starString + '★'; }
        else            { starString = starString + '☆'; }
        s = s + 1;
    }

    let card   = document.createElement('div');  card.className   = 'review-card';
    let header = document.createElement('p');    header.className = 'review-card-header'; header.innerText = name;
    let stars  = document.createElement('p');    stars.className  = 'review-card-stars';  stars.innerText  = starString + '  (' + score + '/5)';
    let body   = document.createElement('p');    body.className   = 'review-card-text';   body.innerText   = text;

    card.appendChild(header);
    card.appendChild(stars);
    card.appendChild(body);

    let list  = document.getElementById('review-list');
    let label = list.querySelector('.gb-section-label');
    list.insertBefore(card, label.nextSibling);

    document.getElementById('review-name').value         = '';
    document.getElementById('review-text').value         = '';
    document.getElementById('review-score-select').value = '';
}

/* ---- FUNCTION 8: Recommendation card click ---- */

function recCardClick(gameName) {
    alert(gameName + ' — page coming soon!');
}

/* ---- FUNCTION 9: Gamebase search bar ---- */

const gbGames = [
    { name: "Resident Evil Requiem",  url: "#",                                          image: "../Images/game_images/resident_evil_requiem/rer.jpg" },
    { name: "Detroit Become Human",   url: "../Indices/detroidbase.html",    image: "../Images/game_images/detroit_become_human/detroit_become_human.jpg" },
    { name: "Forza Horizon 5",        url: "#",                                          image: "../Images/game_images/forza_horizon5/forza.jpg" },
    { name: "Space Flight Simulator", url: "#",                                          image: "../Images/game_images/space_flight_sim/space_flight_sim_poster.png" },
    { name: "Call Of Duty: Warzone",  url: "#",                                          image: "../Images/game_images/call_of_duty_warzon/warzone.jpg" },
    { name: "Trailsmakers",           url: "#",                                          image: "../Images/game_images/trailsmakers/trailsmaker.jpg" },
    { name: "It Takes Two",           url: "#",                                          image: "../Images/game_images/it_takes_two/it_takes_two.jpg" },
    { name: "Cyber Punk 2077",        url: "#",                                          image: "../Images/game_images/cyberpunk2077/cyber_punk.jpg" },
    { name: "War Thunder",            url: "#",                                          image: "../Images/game_images/warthunder/warthunder.png" },
    { name: "Red Dead Redemption 2",  url: "../Indices/rdr2base.html",   image: "../Images/game_images/red_dead_redemtion2/red_dead_redemption2.png" }
];

let gbSearchInput    = document.querySelector('#nav2 .search-input');
let gbSuggestionsBox = document.getElementById('search-suggestions');

if (gbSearchInput && gbSuggestionsBox) {

    gbSearchInput.addEventListener('focus', updateGbSuggestions);
    gbSearchInput.addEventListener('input', updateGbSuggestions);

    document.addEventListener('click', function(event) {
        if (!gbSearchInput.contains(event.target) && !gbSuggestionsBox.contains(event.target)) {
            gbSuggestionsBox.style.display = 'none';
        }
    });

    function updateGbSuggestions() {
        let query = gbSearchInput.value.toLowerCase().trim();
        gbSuggestionsBox.innerHTML = '';

        let matches = [];

        if (query === '') {
            matches = gbGames.slice(0, 3);
        } else {
            let i = 0;
            while (i < gbGames.length) {
                if (gbGames[i].name.toLowerCase().indexOf(query) !== -1) { matches.push(gbGames[i]); }
                i = i + 1;
            }
            matches = matches.slice(0, 3);
        }

        if (matches.length > 0) {
            let j = 0;
            while (j < matches.length) {
                let match = matches[j];

                let div      = document.createElement('div');  div.classList.add('suggestion-item');
                let img      = document.createElement('img');  img.src = match.image; img.alt = match.name;
                let textSpan = document.createElement('span'); textSpan.textContent = match.name;

                div.appendChild(img);
                div.appendChild(textSpan);

                div.addEventListener('click', function() { window.location.href = match.url; });

                gbSuggestionsBox.appendChild(div);
                j = j + 1;
            }
            gbSuggestionsBox.style.display = 'block';

        } else {
            let noResult = document.createElement('div');
            noResult.classList.add('suggestion-item');
            noResult.textContent = 'No games found...';
            gbSuggestionsBox.appendChild(noResult);
            gbSuggestionsBox.style.display = 'block';
        }
    }
}

/* =====================================================/GAME BASE PAGE===================================================== */




/*=======================================================BACK TO TOP BUTTON=======================================================*/


/* Show the button once the user scrolls more than 300px down */
window.addEventListener('scroll', function() {
    let btn = document.getElementById('back-to-top');
    if (btn) {
        if (window.scrollY > 300) { btn.style.display = 'block'; }
        else                      { btn.style.display = 'none';  }
    }
});

/* Smooth scroll — behavior:'smooth' makes it glide instead of jumping instantly */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*=======================================================LIBRARY PAGE=======================================================*/

/* --- Game data: only the 4 owned games --- */
var libGames = [
    {
        title:   "Minecraft",
        banner:  "../Images/minebanner.jpg",
        thumb:   "../Images/minebanner.jpg",
        hours:   "312.5",
        review:  "&#9733; Overwhelmingly Positive",
        achiev:  "8% &nbsp; 3/37",
        last:    "Today",
        desc:    "A sandbox survival game where you mine resources, craft tools, and build anything you can imagine. From cozy cottages to towering castles — the world is yours to shape.",
        achievements: [
            { name: "Taking Inventory",  desc: "Open your inventory",                  done: true  },
            { name: "Getting Wood",      desc: "Punch a tree until a block of wood pops out", done: true },
            { name: "Benchmarking",      desc: "Craft a workbench",                    done: true  },
            { name: "DIAMONDS!",         desc: "Acquire diamonds",                     done: false },
            { name: "The End?",          desc: "Enter the End dimension",              done: false },
            { name: "Enchanter",         desc: "Construct an enchantment table",       done: false }
        ]
    },
    {
        title:   "PUBG",
        banner:  "../Images/pubg.jpg",
        thumb:   "../Images/pubgbanner.jpg",
        hours:   "89.0",
        review:  "&#9733; Mostly Positive",
        achiev:  "100% &nbsp; 45/45",
        last:    "2 days ago",
        desc:    "100 players parachute onto an island and fight to be the last one standing. Loot weapons, avoid the ever-shrinking blue zone, and survive by any means necessary.",
        achievements: [
            { name: "Lone Survivor",  desc: "Win a solo match",                     done: true },
            { name: "Pacifist",       desc: "Win a match with zero kills",          done: true },
            { name: "Sharpshooter",   desc: "Get a kill from over 300m",            done: true },
            { name: "Chicken Dinner", desc: "Win 10 total matches",                 done: true },
            { name: "Road Rage",      desc: "Run over 5 enemies with a vehicle",    done: true },
            { name: "Airdrop Fan",    desc: "Open 50 airdrops",                     done: true }
        ]
    },
    {
        title:   "Elden Ring",
        banner:  "../Images/eldenringbanner.jpg",
        thumb:   "../Images/eldenringbanner.jpg",
        hours:   "140.2",
        review:  "&#9733; Overwhelmingly Positive",
        achiev:  "65% &nbsp; 39/60",
        last:    "3 days ago",
        desc:    "An open-world action RPG from FromSoftware and George R.R. Martin. Journey through the Lands Between, battle demigods, and restore the shattered Elden Ring.",
        achievements: [
            { name: "Elden Lord",       desc: "Reach the Elden Lord ending",         done: true  },
            { name: "Erdtree Aflame",   desc: "Use the forge of the Giants",         done: true  },
            { name: "Shardbearer",      desc: "Defeat a major demigod",              done: true  },
            { name: "Legendary Armaments", desc: "Acquire all legendary weapons",   done: false },
            { name: "Dragon Communion", desc: "Reach the Cathedral of Dragon Communion", done: false },
            { name: "Age of Stars",     desc: "Reach the Age of Stars ending",       done: false }
        ]
    },
    {
        title:   "GTA V",
        banner:  "../Images/gtavbanner.webp",
        thumb:   "../Images/gtavbanner.webp",
        hours:   "278.9",
        review:  "&#9733; Very Positive",
        achiev:  "100% &nbsp; 45/45",
        last:    "Yesterday",
        desc:    "Three criminals pull off heists across the sprawling city of Los Santos. Switch between Michael, Trevor, and Franklin as their stories collide in this open-world epic.",
        achievements: [
            { name: "Welcome to Los Santos", desc: "Complete the prologue",          done: true },
            { name: "A Friendship Resurrected", desc: "Reconnect with an old friend", done: true },
            { name: "Career Criminal",  desc: "Attain 100% game completion",        done: true },
            { name: "Solid Gold",       desc: "Earn 70 gold medals on missions",    done: true },
            { name: "From Beyond the Stars", desc: "Collect all 50 spaceship parts", done: true },
            { name: "All's Fare",       desc: "Complete all taxi missions",         done: true }
        ]
    }
];


/* --- FUNCTION: Select a game and update the entire detail panel --- */
function libSelectGame(index) {

    /* Highlight the sidebar entry */
    var entries = document.querySelectorAll('.lib-game-entry');
    var i = 0;
    while (i < entries.length) {
        entries[i].classList.remove('active');
        i = i + 1;
    }
    entries[index].classList.add('active');

    var g = libGames[index];

    /* Hero banner */
    document.getElementById('lib-hero-img').src       = g.banner;
    document.getElementById('lib-hero-img').alt       = g.title;
    document.getElementById('lib-hero-title').innerHTML = g.title;

    /* Stats */
    document.getElementById('lib-stat-hours').innerText  = g.hours + ' hrs';
    document.getElementById('lib-stat-score').innerHTML  = g.review;
    document.getElementById('lib-stat-achiev').innerHTML = g.achiev;
    document.getElementById('lib-stat-last').innerText   = g.last;

    /* Description */
    document.getElementById('lib-desc').innerText = g.desc;

    /* Rebuild achievement table rows */
    var table = document.getElementById('lib-achiev-table');

    /* Remove all rows except the header (row 0) */
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    var j = 0;
    while (j < g.achievements.length) {
        var a   = g.achievements[j];
        var row = table.insertRow();

        var cell1 = row.insertCell(0); cell1.innerText = a.name;
        var cell2 = row.insertCell(1); cell2.innerText = a.desc;
        var cell3 = row.insertCell(2);

        if (a.done) {
            cell3.className  = 'lib-achiev-done';
            cell3.innerText  = '✓ Unlocked';
        } else {
            cell3.className  = 'lib-achiev-locked';
            cell3.innerText  = '● Locked';
        }

        j = j + 1;
    }

    /* Clear review form and posted cards */
    document.getElementById('lib-review-name').value    = '';
    document.getElementById('lib-review-text').value    = '';
    document.getElementById('lib-review-score').value   = '';
    document.getElementById('lib-review-confirm').innerText = '';

    var list  = document.getElementById('lib-review-list');
    var cards = list.querySelectorAll('.lib-review-card');
    var k = 0;
    while (k < cards.length) {
        list.removeChild(cards[k]);
        k = k + 1;
    }
}


/* --- FUNCTION: Play button alert --- */
function libPlayGame() {
    var title = document.getElementById('lib-hero-title').innerText;
    alert('To play ' + title + ', you need the Game Sphere desktop launcher.\n\nClick OK to download it.');
}


/* --- FUNCTION: Submit a review --- */
function libSubmitReview() {

    var name    = document.getElementById('lib-review-name').value;
    var text    = document.getElementById('lib-review-text').value;
    var score   = document.getElementById('lib-review-score').value;
    var confirm = document.getElementById('lib-review-confirm');

    if (name === '' || text === '' || score === '') {
        confirm.innerText    = '⚠ Please fill in all fields before submitting.';
        confirm.style.color  = '#cc3333';
        return;
    }

    confirm.innerText   = '✓ Review submitted! Thank you, ' + name + '.';
    confirm.style.color = '#27ae60';

    /* Build star string */
    var starString = '';
    var s = 1;
    while (s <= 5) {
        if (s <= score) { starString = starString + '★'; }
        else            { starString = starString + '☆'; }
        s = s + 1;
    }

    /* Build and insert review card */
    var card   = document.createElement('div'); card.className   = 'lib-review-card';
    var header = document.createElement('p');   header.className = 'lib-review-card-header'; header.innerText = name;
    var stars  = document.createElement('p');   stars.className  = 'lib-review-card-stars';  stars.innerText  = starString + '  (' + score + '/5)';
    var body   = document.createElement('p');   body.className   = 'lib-review-card-text';   body.innerText   = text;

    card.appendChild(header);
    card.appendChild(stars);
    card.appendChild(body);

    var list  = document.getElementById('lib-review-list');
    var label = list.querySelector('.lib-panel-heading');
    list.insertBefore(card, label.nextSibling);

    /* Clear form */
    document.getElementById('lib-review-name').value  = '';
    document.getElementById('lib-review-text').value  = '';
    document.getElementById('lib-review-score').value = '';
}


/* Run on load — populate the panel with the first game */
libSelectGame(0);

/*=======================================================END LIBRARY PAGE=======================================================*/