
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
        if (currentPage.includes('Profile.html') || currentPage.includes('settings.html') || currentPage.includes('gaming-cart.html')) {
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
        SignUpVa/lidation.textContent = "Username or Email is already taken!";
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