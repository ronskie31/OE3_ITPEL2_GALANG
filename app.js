//create index value pairing sheesh

const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');

const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');

const alertInputControl = document.querySelector('ion-alert');

let myTotalExpenses = 0;

//clear functions 
const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';

};

//alert button and message
const inputAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'WARNING!'
    alert.message = 'Please enter amount and reason';
    alert.button = ['OK'];

    document.body.appendChild(alert);
    alert.present();
}

//Cancel button eventlistener
cancelButton.addEventListener('click', clear);

//Add button eventlistener
addButton.addEventListener('click', () => {
    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;

    if (reasonEntered.trim().length <= 0 || amountEntered <= 0 || amountEntered.trim().length <= 0) {
        inputAlert();
        return
    }

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ' - ₱ ' + amountEntered;
    expensesList.appendChild(newExpenses);

    myTotalExpenses += +amountEntered;
    totalExpenses.textContent = myTotalExpenses;
    console.log(myTotalExpenses);
    clear();

});