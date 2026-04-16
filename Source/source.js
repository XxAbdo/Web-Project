
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



/*-------------------------------------------------------------Login Validation-------------------------------------------------------------*/
let LoginValidation = document.getElementById("login-validation");
let LoginPassword = document.getElementById("login-password");
let LoginUsername = document.getElementById("login-username");

function VerifyLogin() {
    let LoginPassword = document.getElementById("login-password").value;
    let LoginUsername = document.getElementById("login-username").value;
    let NameExist = false;
    let PasswordExist = false;


    if (LoginPassword.length != 0) {
        PasswordExist = true;
    }
    else {
        LoginValidation.textContent = "You need to enter your password.";
        LoginValidation.style.color = "red";
    }

    if (LoginUsername.length != 0) {
        NameExist = true;
    }
    else {
        LoginValidation.textContent = "You need to enter your username.";
        LoginValidation.style.color = "red";
    }
    
    if (PasswordExist == true && NameExist == true) {
        LoginValidation.textContent = "You have logged into your account!";
        LoginValidation.style.color = "lime";
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


/*----------------------------------------------------------- Sign-Up Validation ---------------------------------------------------------------*/
let SignUpValidation = document.getElementById("sign-up-validation");
let checkbox = document.getElementById("TOS-Checkbox");
let NewUsername = document.getElementById("new-username");
let NewEmail = document.getElementById("new-email");


function VerifySignUp() {

    let Password = document.getElementById("password1").value;
    let ConfirmPassword = document.getElementById("password2").value;
    let NewUsername = document.getElementById("new-username").value;
    let NewEmail = document.getElementById("new-email").value;
    let ValidPassword = false;
    let TOSconfirm = false;
    let NameExist = false;
    let EmailExist = false;


    if (checkbox.checked) {
        TOSconfirm = true;
    }
    else {
        SignUpValidation.textContent = "Please confirm if you agree with our terms and services.";
        SignUpValidation.style.color = "red";
    }

    if (Password.length != 0) {
        if (ConfirmPassword.length != 0) {
            if(Password.length >= 8) {
                if(Password == ConfirmPassword){
                    ValidPassword = true;
                }
                else {
                    SignUpValidation.textContent = "Password mismatch.";
                    SignUpValidation.style.color = "red";
                }
            }
            else {
                SignUpValidation.textContent = "Password must contain at least 8 characters.";
                SignUpValidation.style.color = "red";
            }
        }
        else {
            SignUpValidation.textContent = "Please confirm your password.";
            SignUpValidation.style.color = "red";
        }
    }
    else {
        SignUpValidation.textContent = "You need to enter a password.";
        SignUpValidation.style.color = "red";
    }

    if (NewEmail.length != 0) {
        EmailExist = true;
    }
    else {
        SignUpValidation.textContent = "Please enter an email.";
        SignUpValidation.style.color = "red";
    }

    if (NewUsername.length != 0) {
        NameExist = true;
    }
    else {
        SignUpValidation.textContent = "Please enter a username.";
        SignUpValidation.style.color = "red";
    }

    if (TOSconfirm == true && ValidPassword == true && NameExist == true && EmailExist == true) {
        SignUpValidation.textContent = "Account has been made!";
        SignUpValidation.style.color = "lime";
    }
}

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