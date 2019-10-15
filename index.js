window.onload=function(){
  const educationHeader = document.getElementById('education--header');
  const educationBody = document.getElementById('education--body');
  const educationBtn = document.getElementById('education--header-img');

  educationHeader.addEventListener('click', () => {
    educationBody.classList.toggle('body--active');
    educationHeader.classList.toggle('header--active');
    educationBtn.classList.toggle('fa-sort-down');
    educationBtn.classList.toggle('fa-sort-up');
  })

}


