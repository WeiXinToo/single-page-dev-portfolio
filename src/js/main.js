import '../scss/style.scss';
import {projects} from './projects.js';
// Element
const projectGrid = document.querySelector('.js-projects__grid');
const form = document.querySelector('.js-form');
const nameInput = document.querySelector('.js-name-input');
const emailInput = document.querySelector('.js-email-input');
const textarea = document.querySelector('.js-textarea');

const nameError = document.querySelector('.js-name-error');
const emailError = document.querySelector('.js-email-error');
const textareaError = document.querySelector('.js-textarea-error');

const nameErrorLogo = document.querySelector('.js-invalid-logo-name');
const emailErrorLogo = document.querySelector('.js-invalid-logo-email');
const messageErrorLogo = document.querySelector('.js-invalid-logo-message');

const modal = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-close-modal');

// REGEX
const regexName = /^[A-Za-z\s]+$/;
const regexEmail = /^\w+@\w+\.\w+$/;


// Validations

// Invalid Name
function validateName(value) {
  if (value === '' || value === undefined) {
    nameError.textContent = 'This field is required.'
    nameInput.classList.add('js-input-error');
    nameErrorLogo.style.visibility ='visible';
    return false;
  }
  if (!value.match(regexName)) {
    nameError.textContent = 'Sorry, invalid format here';
    nameInput.classList.add('js-input-error');
    nameErrorLogo.style.visibility ='visible';
    return false;
  } else {
    nameError.textContent = '';
    nameInput.classList.remove('js-input-error');
    nameErrorLogo.style.visibility ='hidden';
    return true;
  }
}


// Invalid Email
function validateEmail(value){
  if (value === '' || value === undefined) {
    emailError.textContent = 'This field is required.'
    emailInput.classList.add('js-input-error');
    emailErrorLogo.style.visibility = 'visible';
    return false;
  }
  if (!value.match(regexEmail)) {
    emailError.textContent = 'Sorry, invalid format here';
    emailInput.classList.add('js-input-error');
    emailErrorLogo.style.visibility = 'visible';
    return false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('js-input-error');
    emailErrorLogo.style.visibility = 'hidden';
    return true;
  }
}

// Invalid textarea
function validateTextarea(value) {
  if (value === '' || value === undefined){
    textareaError.textContent = 'This field is required.';
    textarea.classList.add('js-input-error');
    messageErrorLogo.style.visibility = 'visible';
    return false;
  }
  if (value.length < 20) {
    textareaError.textContent = 'Message is too short';
    textarea.classList.add('js-input-error');
    messageErrorLogo.style.visibility = 'visible';
    return false;
  } else {
    textareaError.textContent = '';
    textarea.classList.remove('js-input-error');
    messageErrorLogo.style.visibility = 'hidden';
    return true;
  }
}



// DOM
form.addEventListener('submit', (e) => {
 
  e.preventDefault();
  // store current input values as strings
  let name = nameInput.value;
  let email = emailInput.value;
  let message = textarea.value;

  const nameStatus = validateName(name);
  const emailStatus = validateEmail(email);
  const messageStatus = validateTextarea(message);
  
  // validation
  if (!nameStatus || !emailStatus || !messageStatus) {return;}
  

  // Send data @ store data logic
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbw2OHnKnOklhaNwuv7u3VtKFsL1G-4VtaybPZljMHpLODiAZgOfN8rlFOizsxFbZ_UU/exec', {
      method: "POST",
      body: data
    })
    .then(res => res.text())
    .then(data => console.log(data));
  
  // Show modal of success message
  modal.showModal()
  modal.style.visibility = "visible";

  // Clearing input field once submitting
  nameInput.value = "";
  emailInput.value = "";
  textarea.value = "";

})

closeModal.addEventListener('click', () => {
  // close modal by click button
  modal.close();
  modal.style.visibility = "hidden";
})

// Generate HTML for projects
let html = '';
projects.forEach((project) => {
  html += `
  <div class="projects__card">
    <div tabindex="0" class="projects__overlay">
      <picture>
        <source media="(min-width: 64rem)" srcset="${project['img-64rem']}">
        <img src="${project.img}" alt="project1" width="1080" height="800">
      </picture>
      <div class="overlay__buttons">
        <a href="">VIEW PROJECT</a>
        <a href="">VIEW CODE</a>
      </div>
    </div>
    <div class="project__info">
      <h3>${project['project-name']}</h3>
      <div class="projects__skills">
        ${project.skills.map(skill =>
          `<p>${skill}<p>`
        ).join('&#124;')}
      </div>
    </div>
    
    <div class="projects__buttons">
      <a href="">VIEW PROJECT</a>
      <a href="">VIEW CODE</a>
    </div>
  </div>
  `
});

projectGrid.innerHTML = html;