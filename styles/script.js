let btnAbout = document.querySelector('#aboutId')
let btnWorks = document.querySelector('#worksId')
let btnContacts = document.querySelector('#contactsId')

let aboutSection = document.querySelectorAll('section')[2]
let worksSection = document.querySelectorAll('section')[6]
let contactSection = document.querySelectorAll('section')[4]

let activeElement = document.querySelector('.active');
console.log(activeElement)

function activeCheck(){
    if (activeElement) {
        activeElement.classList.remove("active");
      }
}

function aboutMenu(){
    aboutSection.classList.add('active')
    activeCheck()
}

function worksMenu(){
    worksSection.classList.add('active')
    activeCheck()
}

function contactMenu(){
    contactSection.classList.add('active')
    activeCheck()
}
