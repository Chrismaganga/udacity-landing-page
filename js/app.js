
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');
  
    // Create navigation links dynamically based on sections
    sections.forEach((section) => {
      const sectionId = section.id;
      const sectionName = section.getAttribute('data-nav');
  
      // Create list item and anchor for each section
      const li = document.createElement('li');
      li.classList.add('navbar__list-item');
  
      const a = document.createElement('a');
      a.classList.add('navbar__link');
      a.setAttribute('href', `#${sectionId}`);
      a.textContent = sectionName;
  
      li.appendChild(a);
      navList.appendChild(li);
    });
  
    // Scroll to the section when clicking on navigation links
    const navLinks = document.querySelectorAll('.navbar__link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Highlight the active section based on scroll position
    const makeActive = () => {
      let currentSection = '';
      
      sections.forEach((section) => {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) { // Adjust the value for better detection
          currentSection = section.getAttribute('id');
        }
      });
  
      // Remove 'active' class from all sections and links
      sections.forEach((section) => section.classList.remove('your-active-class'));
      navLinks.forEach((link) => link.classList.remove('active'));
  
      // Add 'active' class to the current section and link
      if (currentSection) {
        document.getElementById(currentSection).classList.add('your-active-class');
        const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
        activeLink.classList.add('active');
      }
    };
  
    // Listen for scroll events to update active section
    window.addEventListener('scroll', makeActive);
  
    // Initial check on page load
    makeActive();
  });
  