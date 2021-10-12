'use strict'


function main() {
    navBarChange();
    navBarResponsive();
}


function navBarChange() {
    let headerNew = document.getElementById('header-new');
    let headerOnline = document.getElementById('header-online');
    let headerRankings = document.getElementById('header-rankings');
    let headerLogo = document.getElementById('header-logo');
    let headerSearch = document.getElementById('header-search');
    let headerUsername = document.getElementById('header-username');
    let headerUsernamePic = document.getElementById('header-usernamePic')
    let headerProfile = document.getElementById('header-profile');
    let headerLogout = document.getElementById('header-logout');
    let headerDivider = document.getElementById('header-divider');
    
    headerNew.addEventListener('mouseover', function(){this.src =  "../images/new-edited.png";}, false);
    headerNew.addEventListener('mouseout',function(){this.src = "../images/new.png";}, false);

    headerOnline.addEventListener('mouseover', function(){this.src =  "../images/online-edited.png";}, false);
    headerOnline.addEventListener('mouseout',function(){this.src = "../images/online.png";}, false);

    headerRankings.addEventListener('mouseover', function(){this.src =  "../images/rankings-edited.png";}, false);
    headerRankings.addEventListener('mouseout', function(){this.src = "../images/rankings.png";}, false);

    headerLogo.addEventListener('mouseover', function(){this.src =  "../images/logo-edited.png";}, false);
    headerLogo.addEventListener('mouseout', function(){this.src = "../images/logo.png";}, false);

    headerSearch.addEventListener('mouseover', function(){
        this.style.background = "url('../images/lens-edited.png'";
        this.style.fontWeight = "bold";
    }, false);
    headerSearch.addEventListener('mouseout', function(){
        this.style.background = "url('../images/lens.png'";
        this.style.fontWeight = "normal";
    }, false);

    headerUsername.addEventListener('mouseover', function(){
        this.style.fontWeight = "bold";
        headerUsernamePic.style.border = "5px solid #FFFFFF !important;";
        this.style.fontSize = "auto !important";
    }, false);
    headerUsername.addEventListener('mouseout', function(){
        this.style.fontWeight = "normal";
        headerUsernamePic.style.border = "1.5px solid #FFFFFF !important;";
        this.style.fontSize = "larger !important";
    }, false);

    headerProfile.addEventListener('mouseover', function(){
        this.style.background = "url('../images/profile-pic-edited.png'";
        this.style.fontWeight = "bold";
        headerDivider.style.border = "1px solid #FFFFFF";
    }, false);
    headerProfile.addEventListener('mouseout', function(){
        this.style.background = "url('../images/profile-pic.png'";
        this.style.fontWeight = "normal";
        headerDivider.style.border = "0.5px solid #FFFFFF";
    }, false);

    headerLogout.addEventListener('mouseover', function(){
        this.style.background = "url('../images/log-out-edited.png'";
        this.style.fontWeight = "bold";
        headerDivider.style.border = "1px solid #FFFFFF";
    }, false);
    headerLogout.addEventListener('mouseout', function(){
        this.style.background = "url('../images/log-out.png'";
        this.style.fontWeight = "normal";
        headerDivider.style.border = "0.5px solid #FFFFFF";
    }, false);

    headerDivider.addEventListener('mouseover', function(){this.style.border= "1px solid #FFFFFF";}, false);
    headerDivider.addEventListener('mouseout', function(){this.style.border= "1px solid #FFFFFF";}, false);
}


function navBarResponsive(){ 
    let headerCompleteLogo = document.getElementById('header-complete-logo');
    
    if(window.innerWidth<992){
        headerCompleteLogo.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', main);