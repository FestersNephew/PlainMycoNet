// Select the social media links
const socialMediaLinks = document.querySelectorAll('.social-media a');

// Loop through the links and add a class to each one
socialMediaLinks.forEach(link => {
  link.classList.add('social-link');
});

// Select the email contact info
const contactEmail = document.querySelector('.contact-info p');

// Add a click event listener to the email to change its text
contactEmail.addEventListener('click', () => {
  contactEmail.textContent = 'Email us at myco-net@gmail.com';
});

// Select the footer
const footer = document.querySelector('#footer');

// Add a mouseover event listener to the footer to change its background color
footer.addEventListener('mouseover', () => {
  footer.style.backgroundColor = '#4a5a3f';
});

// Add a mouseout event listener to the footer to reset its background color
footer.addEventListener('mouseout', () => {
  footer.style.backgroundColor = '';
});
