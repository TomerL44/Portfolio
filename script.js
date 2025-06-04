AOS.init({
  duration: 1200, // animation duration
  delay: 100, // delay before animation starts
  offset: 200, // offset (px) before element is animated
  easing: 'ease-out-cubic', // easing function
  once: true // animate only once
});

function scrollToSection(id) {
  const section = document.getElementById(id); // get the section by ID
  if (section) {
    section.querySelectorAll('[data-aos]').forEach((el) => {
      el.classList.remove('aos-animate'); // reset each section AOS animation
      void el.offsetWidth; // force reflow (restart animation)
    });

    section.scrollIntoView({ behavior: 'smooth' }); // smooth scroll

    setTimeout(() => {
      AOS.refresh(); // re-trigger AOS animations after 600ms
    }, 600);
  }
}

function scrollToTop() {
  scrollToSection('home'); // scroll to top section
}

document.addEventListener('DOMContentLoaded', () => { // waits for the html to fully load inorder to verify that the form is existed before managing it
  if (window.location.search.includes('success=true')) { // check if success=true includes in the query, if yes it means that the details inserted correctly
    alert('Your details have been sent, thank you!'); // show success message
    window.history.replaceState({}, document.title, window.location.pathname); // remove query string from URL without reloading the page (prevents alert on refresh)
  }
});
