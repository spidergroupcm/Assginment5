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


let currentBalance = 5000;
let totalDonated = 0;

// Check if donationHistory exists in localStorage
let donationHistory = localStorage.getItem('donationHistory');

// If donationHistory does not exist, set it to an empty array
if (donationHistory) {
    donationHistory = JSON.parse(donationHistory);
} else {
    donationHistory = [];
}

// DOM Elements
const balanceDisplay = document.getElementById('balance');
const totalDonatedDisplay = document.getElementById('total-donated');
const donateBtn = document.getElementById('donate-btn');
const donationInput = document.getElementById('donation-amount');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModalBtn = document.getElementById('close-modal');

// Update balance and total donated display
balanceDisplay.innerText = currentBalance;
totalDonatedDisplay.innerText = totalDonated;

function updateHistory(amount) {
    const transaction = {
        amount: amount,
        date: new Date().toLocaleString(),
        remainingBalance: currentBalance
    };
    donationHistory.push(transaction);
    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));
}

function showModal(message) {
    modalMessage.innerText = message;
    modal.classList.remove('hidden');
}

closeModalBtn.onclick = function() {
    modal.classList.add('hidden');
};

donateBtn.onclick = function() {
    const donationValue = donationInput.value.trim();
    const donationAmount = parseFloat(donationValue);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Invalid input! Please enter a positive number.");
    } else if (donationAmount > currentBalance) {
        alert("Insufficient balance!");
    } else {
        currentBalance -= donationAmount;
        balanceDisplay.innerText = currentBalance;

        totalDonated += donationAmount;
        totalDonatedDisplay.innerText = totalDonated;

        showModal(`Successfully donated $${donationAmount.toFixed(2)}!`);

        updateHistory(donationAmount);
    }

    donationInput.value = '';
};



