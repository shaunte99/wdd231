document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          // Remove 'active' class from all links
          navLinks.forEach(link => link.classList.remove('active'));
          // Add 'active' class to the clicked link
          link.classList.add('active');
      });
  });
});
