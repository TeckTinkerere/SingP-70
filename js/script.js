// Intersection Observer for animations
// This code creates an IntersectionObserver that observes all elements with the class "card".
// When an element is visible in the viewport, it adds the "animate__animated" and "animate__fadeIn" 
// classes, which trigger the animation defined in animate.css.
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated');
        entry.target.classList.add('animate__fadeIn');
      }
    });
  });

  // Observe all elements with the class "card"
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => observer.observe(card));
});

// Card Section for Futures Page
// This code adds interactive features to the cards on the Futures page.
// It adds a click event to display a pop-up message, a hover event to change the icon color, and
// a double-click event to expand/collapse the card content.
document.addEventListener('DOMContentLoaded', () => {
  // Add interactive features to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    // Add click event to display more details
    card.addEventListener('click', function () {
      alert('More details coming soon!');
    });

    // Add hover effect to change icon color
    card.addEventListener('mouseover', function () {
      this.querySelector('.icon').style.color = '#ff4500'; // Darker red on hover
    });
    card.addEventListener('mouseout', function () {
      this.querySelector('.icon').style.color = '#ff6347'; // Original red
    });

    // Add toggle effect to expand/collapse card content
    card.addEventListener('dblclick', function () {
      const content = this.querySelector('p');
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
  const myButton = document.getElementById("myBtn");

  // Add event listener to window scroll
  window.addEventListener('scroll', scrollFunction);

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = "block"; // Show the Back To Top button if the user is more than 20px from the top
    } else {
      myButton.style.display = "none"; // Hide the Back To Top button if the user is at the top
    }
  }

  // Add event listener to button click
  myButton.addEventListener('click', topFunction);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});

// Add active class to navigation item if it is the current page
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item'); // Get all navigation items
  const currentUrl = window.location.href; // Get current page URL

  navItems.forEach((item) => { // Loop through each navigation item
    const link = item.querySelector('a'); // Get the link inside the navigation item
    if (link.href === currentUrl) { // Check if the link is the current page
      item.classList.add('active'); // Add active class to the navigation item
    }
  });
});

// Display value of slider input
document.addEventListener('DOMContentLoaded', () => {
  const customRange = document.getElementById('customRange'); // Get slider input element
  const sliderValue = document.getElementById('sliderValue'); // Get element to display slider value

  customRange.addEventListener('input', function () { // Add event listener to slider input
    sliderValue.innerText = this.value; // Update value displayed on page
  });
});

// Add event listeners to form inputs to validate and provide feedback
const formInputs = document.querySelectorAll('input, textarea, select');

formInputs.forEach(input => {
  input.addEventListener('input', validateInput);
  input.addEventListener('blur', validateInput);
});

/**
 * Validate form input and display feedback
 * @param {Event} event - The input event
 */
function validateInput(event) {
  const input = event.target; // Get the input element
  const validity = input.validity; // Get the validity of the input

  if (validity.valid) { // If the input is valid
    // Display valid feedback
    input.classList.add('is-valid'); // Add class to show valid feedback
    input.classList.remove('is-invalid'); // Remove class to hide invalid feedback
    input.nextElementSibling.textContent = 'Valid \u{1F604}'; // Update feedback text
  } else { // If the input is invalid
    // Display invalid feedback
    input.classList.add('is-invalid'); // Add class to show invalid feedback
    input.classList.remove('is-valid'); // Remove class to hide valid feedback
    input.nextElementSibling.textContent = ''; // Clear feedback text
  }
}
//======================================================================================
// Show the selected section and activate the corresponding tab
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content').forEach(function (section) {
    section.style.display = 'none';
  });

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';

  // Activate the corresponding tab
  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.classList.remove('active');
  });
  document.querySelector('.tab[data-section="' + sectionId + '"]').classList.add('active');
}
