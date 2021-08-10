function changeHeader() {
    let changeHeaderSpecs = document.querySelector('#header-container');
    changeHeaderSpecs.style.background = '#00b069';
}
changeHeader();

function changeEmergency() {
    let changeEmergencyTasks = document.querySelector('.emergency-tasks');
    changeEmergencyTasks.style.background = '#ff9f84';
    let changeTitle = document.querySelectorAll('.emergency-tasks h3');
    for (i = 0; i < changeTitle.length; i+= 1) {
        changeTitle[i].style.background = '#a500f3';
    }
}
changeEmergency();

function changeNoEmergency() {
    let changeNoEmergencyTasks = document.querySelector('.no-emergency-tasks');
    changeNoEmergencyTasks.style.background = '#f9db5e';
    let changeTitleB = document.querySelectorAll('.no-emergency-tasks h3');
    for (i = 0; i < changeTitleB.length; i+= 1) {
        changeTitleB[i].style.background = '#232525';
    }
}
changeNoEmergency();

function changeFooter() {
    let changeFooterSpecs = document.querySelector('#footer-container');
    changeFooterSpecs.style.background = '#003533';
}
changeFooter();
