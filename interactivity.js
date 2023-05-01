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

const textbox = document.querySelector('.textbox');
const textboxContainer = document.createElement('div');
textboxContainer.classList.add('textbox-container');
textbox.parentNode.insertBefore(textboxContainer, textbox);
textboxContainer.appendChild(textbox);

textbox.style.top = '450px';

const scrollAmount = textboxContainer.scrollHeight - textboxContainer.offsetHeight;
const duration = 10000; // set duration to 10 seconds
let isScrolling = true;

function scrollTextbox() {
  if (isScrolling) {
    const currentTime = Date.now();
    const endTime = currentTime + duration;

    function animateScroll() {
      const elapsed = endTime - Date.now();
      const remaining = scrollAmount * (elapsed / duration);
      textboxContainer.scrollTop = remaining;

      if (elapsed < 0) {
        clearInterval(scrollTimer);
        isScrolling = false;
        setTimeout(() => {
          textbox.classList.remove('fadein');
          textbox.classList.add('fadeout');
          setTimeout(() => {
            textboxContainer.parentNode.removeChild(textboxContainer);
          }, 2000);
        }, 2000);
      }
    }

    const scrollTimer = setInterval(animateScroll, 50);
  }
}

// Add a click event listener to the textbox container to toggle scrolling on/off
textboxContainer.addEventListener('click', () => {
  isScrolling = !isScrolling;
});

scrollTextbox();
