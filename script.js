// for mobile nav
const button1 = document.getElementById('menubttn1m');
const button2 = document.getElementById('menubttn2m');
const sidebar = document.querySelector('.sidebar');

let isVisible = false; // Track visibility state

const toggleSidebar = () => {
  if (isVisible) {
    button1.style.display = 'flex';
    button2.style.display = 'none';
  } else {

    button1.style.display = 'none';
    button2.style.display = 'flex';
  }
  
  isVisible = !isVisible; // Toggle visibility state
};

button1.addEventListener('click', toggleSidebar);
button2.addEventListener('click', toggleSidebar);

// for desktop nav
const toleft = document.getElementById("goleftbttn");
const toright = document.getElementById("gorightbttn");

toleft.addEventListener('click', function(){
  toleft.innerHTML = '<i class="fa-solid fa-caret-left" style="font-size: 30px; color: #697565;"></i>'
});
toright.addEventListener('click', function(){
  toright.innerHTML = '<i class="fa-solid fa-caret-right" style="font-size: 30px; color: #697565;"></i>'
});

const pagescrollindic = document.querySelectorAll(".scroll-numindic-circ");

pagescrollindic.forEach((indicator) => {
  indicator.addEventListener('click', function() {
    indicator.style.background = 'linear-gradient(to left, #697565, #3C3D37)';
  });
});