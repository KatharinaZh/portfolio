const educationHeader = document.getElementById('education--header');
const educationBody = document.getElementById('education--body');
const educationBtn = document.getElementById('education--header-img');

educationHeader.addEventListener('click', () => {
  educationBody.classList.toggle('body--active');
  educationHeader.classList.toggle('header--active');
  educationBtn.classList.toggle('fa-sort-down');
  educationBtn.classList.toggle('fa-sort-up');
})

$('.slider').slick();


const showDesc1 = document.getElementById('desc_show-1');
const descMob1 = document.getElementById('slide_desc-mobile-1');
const descBtn1 = document.getElementById('desc_show-img-1');
const showBtn1 = document.getElementById('desc_show--btn-1');

showDesc1.addEventListener('click', () => {
  descMob1.classList.toggle('desc-show');
  descBtn1.classList.toggle('fa-sort-down');
  descBtn1.classList.toggle('fa-sort-up');
  showBtn1.classList.toggle('open');

  if (showBtn1.classList.contains('open')) {
    showBtn1.innerHTML = "Hide description";
  } else {
    showBtn1.innerHTML = "Show description";
  }
})

const showDesc2 = document.getElementById('desc_show-2');
const descMob2 = document.getElementById('slide_desc-mobile-2');
const descBtn2 = document.getElementById('desc_show-img-2');
const showBtn2 = document.getElementById('desc_show--btn-2');

showDesc2.addEventListener('click', () => {
  descMob2.classList.toggle('desc-show');
  descBtn2.classList.toggle('fa-sort-down');
  descBtn2.classList.toggle('fa-sort-up');
  showBtn2.classList.toggle('open');

  if (showBtn2.classList.contains('open')) {
    showBtn2.innerHTML = "Hide description";
  } else {
    showBtn2.innerHTML = "Show description";
  }
})

