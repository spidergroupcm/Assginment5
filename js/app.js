// This script will handle the button functionality and page redirection

// Select buttons
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');

// Add event listeners for redirection and style toggling
donationBtn.addEventListener('click', function () {
  // Redirect to index.html (Donation page)
  window.location.href = 'index.html';
});

historyBtn.addEventListener('click', function () {
  // Redirect to history.html (History page)
  window.location.href = 'history.html';
});



// Java Script fot Blog Button

function navigate() {
  const button = document.getElementById('navButton');
  
  if (button.innerText === 'Blog') {
      // Change button label to "Home" and navigate to blog.html
      button.innerText = 'Home';
      window.location.href = 'blog.html';
  } else {
      // Change button label to "Blog" and navigate back to index.html
      button.innerText = 'Blog';
      window.location.href = 'index.html';
  }
}
