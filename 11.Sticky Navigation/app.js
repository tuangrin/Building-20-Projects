const nav = document.querySelector('.nav');
window.addEventListener('scroll', stickyNavbar);

function stickyNavbar() {
  if (window.scrollY > nav.offsetHeight+150) {
    // offsetHeight = ความสูงของหน้าต่างที่รวม scroll bar แล้ว
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
