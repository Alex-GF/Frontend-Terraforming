'use strict'
function main() {
    let headerNew = document.getElementById('header-new');
    let headerOnline = document.getElementById('header-online');
    let headerRankings = document.getElementById('header-rankings');
    let headerLogo = document.getElementById('header-logo');
    
    headerNew.addEventListener('mouseover', function(){this.src =  "../images/new-edited.png";}, false);
    headerNew.addEventListener('mouseout',function(){this.src = "../images/new.png";}, false);

    headerOnline.addEventListener('mouseover', function(){this.src =  "../images/online-edited.png";}, false);
    headerOnline.addEventListener('mouseout',function(){this.src = "../images/online.png";}, false);

    headerRankings.addEventListener('mouseover', function(){this.src =  "../images/rankings-edited.png";}, false);
    headerRankings.addEventListener('mouseout', function(){this.src = "../images/rankings.png";}, false);

    headerLogo.addEventListener('mouseover', function(){this.src =  "../images/logo-edited.png";}, false);
    headerLogo.addEventListener('mouseout', function(){this.src = "../images/logo.png";}, false);
}

document.addEventListener('DOMContentLoaded', main);