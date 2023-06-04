const keAtas = document.querySelector('.ke-atas');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    keAtas.classList.add('active');
  } else {
    keAtas.classList.remove('active');
  }
});
