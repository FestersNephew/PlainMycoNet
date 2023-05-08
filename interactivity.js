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

textbox.style.top = '550px';

const scrollDistance = 600; // set the distance to scroll down to 600px
const duration = 10000; // set duration to 10 seconds
let isScrolling = true;
let isAtBottom = false;

function scrollTextbox() {
  if (isScrolling) {
    const startTime = performance.now();
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const scrollFraction = elapsed / duration;
      const scrollAmount = scrollFraction * scrollDistance;

      textboxContainer.scrollTop = scrollAmount;

      if (scrollAmount >= scrollDistance) {
        isAtBottom = true;
        clearInterval(scrollTimer);
      }
    }

    const scrollTimer = setInterval(() => {
      const currentTime = performance.now();
      animateScroll(currentTime);
    }, 20);
  }
}

function stopTextbox() {
  if (!isAtBottom) {
    isScrolling = false;
  }
}

// Add a mousedown event listener to the textbox container to stop the scrolling
textboxContainer.addEventListener('mousedown', stopTextbox);

scrollTextbox();

