

const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');


donationBtn.addEventListener('click', function () {
  window.location.href = 'index.html';
});

historyBtn.addEventListener('click', function () {
  window.location.href = 'history.html';
});



// Java Script for Blog Button

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
