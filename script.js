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
      // הפעלת האנימציה מחדש
      section.querySelectorAll('[data-aos]').forEach((el) => {
        el.classList.remove('aos-animate');
        void el.offsetWidth; // טריק לכפות רה-רנדר
      });
  
      section.scrollIntoView({ behavior: 'smooth' });
  
      // הוספת האנימציה שוב לאחר העיכוב
      setTimeout(() => {
        AOS.refresh();
      }, 600);
    }
  }
  
  function scrollToTop() {
    scrollToSection('home');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
  
        try {
          const res = await fetch('/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
  
          if (res.ok) {
            alert('Your details have been sent, Thank you!');
            form.reset(); // איפוס השדות
          } else {
            alert('Error try again please');
          }
        } catch (err) {
          console.error(err);
          alert('error, verify server');
        }
      });
    }
  });
  
  
  