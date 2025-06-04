AOS.init({
  duration: 1200,
  delay: 100,
  offset: 200,
  easing: 'ease-out-cubic',
  once: true
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.querySelectorAll('[data-aos]').forEach((el) => {
      el.classList.remove('aos-animate');
      void el.offsetWidth;
    });

    section.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      AOS.refresh();
    }, 600);
  }
}

function scrollToTop() {
  scrollToSection('home');
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.search.includes('success=true')) {
    alert('Your details have been sent, thank you!');
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});
