const slider = document.querySelector('.slidercontainer');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


let searchFilter = document.querySelector('.advancedSearchOption');
let searchFilterButton = document.querySelector('.advancedSearchButton');

searchFilterButton.addEventListener('click', () =>{
  searchFilter.classList.toggle('showeElement')
});


let closeButtons = document.querySelectorAll('.close');
let toggleNavbar = document.querySelector('.navBar > .navbarMenu');
let navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('mouseover', () => {
  toggleNavbar.classList.remove('hiddenElement')
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    toggleNavbar.classList.add('hiddenElement')
  });
});