let cardSection = document.querySelectorAll('section')[0]
let aboutSection = document.querySelectorAll('section')[2]
let worksSection = document.querySelectorAll('section')[4]
let contactSection = document.querySelectorAll('section')[6]




function activeCheck() {
    let activeElement = document.querySelector('.active');
    if (activeElement) {
        activeElement.classList.remove("active");
    }
}

function aboutMenu() {
    aboutSection.classList.add('active')
    activeCheck()
}

function worksMenu() {
    worksSection.classList.add('active')
    activeCheck()
}

function contactMenu() {
    activeCheck()
    contactSection.classList.add('active')
}

function cardMenu() {
    activeCheck()
    cardSection.classList.add('active')
}