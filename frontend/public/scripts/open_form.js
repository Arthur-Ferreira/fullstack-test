const backgroundElem= document.getElementById('background');
const formSectionElem = document.getElementById('form_section');
const openFormBtn = document.getElementById('open_form');
const closeFormBtn = document.getElementById('close');


function openForm() {
  backgroundElem.classList.add('open');
  formSectionElem.classList.add('open');
}

function closeForm() {
  backgroundElem.classList.remove('open');
  formSectionElem.classList.remove('open');
}


openFormBtn.addEventListener('click', openForm);
closeFormBtn.addEventListener('click', closeForm);