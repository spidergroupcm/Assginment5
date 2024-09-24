// This script will handle the button functionality and page redirection


const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');


donationBtn.addEventListener('click', function () {
  window.location.href = 'index.html';
});

historyBtn.addEventListener('click', function () {
  window.location.href = 'history.html';
});



// Java Script fot Blog Button

function navigate() {
  const button = document.getElementById('navButton');
  
  if (button.innerText === 'Blog') {
      
      button.innerText = 'Home';
      window.location.href = 'blog.html';
  } else {
     
      button.innerText = 'Blog';
      window.location.href = 'index.html';
  }
}



let totalBalance = 5000;

        function updateTotalBalance() {
            document.getElementById('totalBalance').innerText = totalBalance;
        }

        function donate(donatedId, inputId) {
            const donatedElement = document.getElementById(donatedId);
            const donationInput = document.getElementById(inputId);
            let totalDonated = parseInt(donatedElement.innerText.replace('$', ''));
            let donationAmount = parseInt(donationInput.value);

            if (isNaN(donationAmount) || donationAmount <= 0) {
                alert('Please enter a valid positive number for the donation.');
                return;
            }

            if (donationAmount > totalBalance) {
                alert('You do not have enough balance for this donation.');
                return;
            }

            totalBalance -= donationAmount;
            totalDonated += donationAmount;

            donatedElement.innerText = `$${totalDonated}`;
            updateTotalBalance();

            showModal();
            donationInput.value = '';
        }

        function showModal() {
            document.getElementById('modalBackdrop').classList.remove('hidden');
            document.getElementById('donationModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('modalBackdrop').classList.add('hidden');
            document.getElementById('donationModal').classList.add('hidden');
        }

        updateTotalBalance();



// // ishfushyfisdfsfh

// let currentBalance = 5000;
// let totalDonated = 0;



// const balanceDisplay = document.getElementById('balance');
// const totalDonatedDisplay = document.getElementById('total-donated');

// const donateBtn = document.getElementById('donate-btn');
// const donationInput = document.getElementById('donation-amount');
// const modal = document.getElementById('modal');
// const modalMessage = document.getElementById('modal-message');
// const closeModalBtn = document.getElementById('close-modal');



// // Update balance and total donated display
// balanceDisplay.innerText = currentBalance;
// totalDonatedDisplay.innerText = totalDonated;


// function showModal(message) {
//     modalMessage.innerText = message;
//     modal.classList.remove('hidden');
// }

// closeModalBtn.onclick = function() {
//     modal.classList.add('hidden');
// };

// donateBtn.onclick = function() {
//     const donationValue = donationInput.value.trim();
//     const donationAmount = parseFloat(donationValue);

//     if (isNaN(donationAmount) || donationAmount <= 0) {
//         alert("Invalid input! Please enter a positive number.");
//     } else if (donationAmount > currentBalance) {
//         alert("Insufficient balance!");
//     } else {
//         currentBalance -= donationAmount;
//         balanceDisplay.innerText = currentBalance;

//         totalDonated += donationAmount;
//         totalDonatedDisplay.innerText = totalDonated;

//         showModal(`Successfully donated ${donationAmount.toFixed(2)} BDT`);

//         updateHistory(donationAmount);
//     }

//     donationInput.value = '';
// };





