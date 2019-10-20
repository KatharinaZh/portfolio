const mobileBtn = document.getElementById('change_btn');
const frame = document.getElementById('frame')

mobileBtn.addEventListener('click', () => {
  frame.classList.toggle('mobile_width');

  if (frame.classList.contains('mobile_width')) {
    mobileBtn.innerHTML = "Desktop";
  } else {
    mobileBtn.innerHTML = "Mobile";
  }
})
