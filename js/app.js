

const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const backHomeBtn = document.getElementById('backHomeBtn');
const historyModal = document.getElementById('historyModal');
const transactionHistoryList = document.getElementById('transactionHistoryList');


let transactionHistory = [];

donationBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
});

historyBtn.addEventListener('click', function () {
    showTransactionHistory();
    historyModal.classList.remove('hidden');
});

backHomeBtn.addEventListener('click', function () {
    historyModal.classList.add('hidden');
});


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


    const currentDateTime = new Date().toLocaleString();
    transactionHistory.push({
        date: currentDateTime,
        amount: donationAmount
    });

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

function showTransactionHistory() {
    transactionHistoryList.innerHTML = ''; 
    if (transactionHistory.length === 0) {
        transactionHistoryList.innerHTML = '<li>No transactions yet.</li>';
    } else {
        transactionHistory.forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.classList.add('mb-2');
            listItem.innerHTML = `<strong>${transaction.date}:</strong>
You have successfully Donated <strong>$${transaction.amount}</strong>`;
            transactionHistoryList.appendChild(listItem);
        });
    }
}

updateTotalBalance();




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


