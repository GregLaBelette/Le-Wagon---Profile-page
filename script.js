const menuScroll = () => {
  if (window.innerWidth < 600 && window.scrollY < 60) {
    document.querySelector('.dropdown').classList.add('visually-hidden');
  } else {
    document.querySelector('.dropdown').classList.remove('visually-hidden');
  }
};

window.onresize = (() => {
  menuScroll();
})

window.onload = (() => {
  menuScroll();
})

window.onscroll = (() => {
  menuScroll();
})
